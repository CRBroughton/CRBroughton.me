---
title: How I've been trying to improve mocking with Zod
date: '2024-12-27'
published: true
description: An article detailing how to use zodObjectBuilder to improve your mocking experiences
tags: [TypeScript, Zod, Testing]
---

If you're a Frontend Engineer, you've likely been in a situation where you've been required to start implementing a feature before the API that serves the back end portion of that feature exists. Engineers will often turn to mocking to enable parallel development (meaning both the front-end and back-end portions of the feature are developed in parallel).

Mocking however can come with some disadvantages. The first and most obvious is that mocks can drift from the actual implementation, causing them to be unreliable. A second problematic issues is that mocks can often be verbose; With mocks that contain a lot of data, it might be unclear as to what a certain mock response is actually mocking.

The below data is an example of some data you might find in a code-base:

```typescript
type Order = {
  orderId: string;
  customerInfo: CustomerInfo; // omitted these types for brevity
  orderDate: string;
  items: OrderItem[];
  paymentInfo: PaymentInfo;
  subtotal: number;
  shippingCost: number;
  tax: number;
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  trackingNumber: string | null;
};

const mockOrders: Order[] = [
  {
    orderId: "ORD-2024-001",
    customerInfo: {
      id: "CUST-1234",
      name: "Alice Johnson",
      email: "alice.j@email.com",
      shippingAddress: {
        street: "123 Pine Street",
        city: "Portland",
        state: "OR",
        zipCode: "97201",
        country: "USA"
      }
    },
    orderDate: "2024-03-15T14:30:00Z",
    items: [
      {
        productId: "PROD-789",
        name: "Organic Cotton T-Shirt",
        quantity: 2,
        pricePerUnit: 29.99,
        color: "Navy",
        size: "M"
      },
      {
        productId: "PROD-456",
        name: "Recycled Canvas Tote",
        quantity: 1,
        pricePerUnit: 35.00,
        color: "Natural"
      }
    ],
    paymentInfo: {
      method: "credit_card",
      status: "completed",
      transactionId: "TXN-88776655"
    },
    subtotal: 94.98,
    shippingCost: 5.99,
    tax: 9.50,
    totalAmount: 110.47,
    status: "shipped",
    trackingNumber: "1Z999AA1234567890"
  },
  // Imagine more objects here, with various values changed...
];
```

The data I work with everyday looks a lot like this. Arrays of orders or some sort of customer focused information, featuring nested values that help populate tables, popups and cards detailed with all sorts of information.

As an engineer tasked with maintaining applications that heavily rely on such mocks, you might ask 'what is this particular object in the response mocking?'. I've often found myself scrolling through hundreds of examples just like the one above, being unsure as to what each objects purpose was.

As I've become more sure of myself as an engineer, I've tasked myself with solving the above issue; What if every mock could more easily display its purpose? What if an engineer only had to write the lines they were intending to mock?

Whilst playing around with some code and a library called Zod, I found the following method called parse, which attempts to validate incoming data against a known type:

```typescript
const stringSchema = z.string();

stringSchema.parse("fish"); // => returns "fish"
stringSchema.parse(12); // throws error
```

This was a light-bulb moment; This little example in the Zod documentation was exactly what I had been looking for! If the parse method could accept a value and return it, then if I passed in a value, I would get it back. I also already knew that I could define default values to a Zod schema. What if passing an empty object would return a full object, with its values? Lo and behold it did; I could define default values on a Zod schema, and return the defaults:

```typescript
const UserSchema = z.object({
  id: z.string().default('1'),
  name: z.string().default('Craig R Broughton'),
  settings: z.object({
    theme: z.enum(['light', 'dark']),
    notifications: z.boolean()
  }).default({
    theme: 'dark',
    notifications: true,
  })
});

const user = UserSchema.parse({}) // returns a full user object
```

Now I had a way to generate objects, however it was still not quite what I was looking for. What I really wanted was a way to *only* write the exact lines I was 'mocking'. A simple solution might look like:

```typescript
const UserSchema = z.object({
  id: z.string().default('1'),
  name: z.string().default('Craig R Broughton'),
  settings: z.object({
    theme: z.enum(['light', 'dark']),
    notifications: z.boolean()
  }).default({
    theme: 'dark',
    notifications: true,
  })
});

const user = UserSchema.parse({})
const overridenUser = {...user, ...{
  name: "My new name",
  settings: {}, // I would need to write every key:value for settings :(
} satisfies Partial<z.infer<typeof UserSchema>>} // overrides the base object
```

However this has its own flaws; What if the value I wish to override is itself an object or array? I'd then have to manually type out each line that was previously required for that feature to continue to work and be mocked as expected, which defeats the purpose of our work in progress solution.

For a long while, this is as far as I had got, until very recently when I had another stab at improving the above. The first step was defining the 'API'; How did I want my users to interact with this functionality?

```typescript
const UserSchema = z.object({
  id: z.string().default('1'),
  name: z.string().default('Craig R Broughton'),
  settings: z.object({
    theme: z.enum(['light', 'dark']),
    notifications: z.boolean()
  }).default({
    theme: 'dark',
    notifications: true,
  })
});

const user = zodObjectBuilder({
  schema: UserSchema,
  overrides: { name: 'My new name', settings: { theme: 'dark' } } // settings is missing the notifications key :(
}); // returns a full user object with the overrides
```

The above API would allow the user to specify a schema of their choice, and then provide the appropriate overrides and return a user object! Of course we'd want to properly account for arrays as well as a single object. For that purpose, a simple type check against the incoming overrides type proved sufficient:

```typescript
// Some of the implementation of zodObjectBuilder
if (overrides && Array.isArray(overrides)) {
  const objects: z.infer<T>[] = []
  overrides.forEach((override) => {
    if (config.preserveNestedDefaults) {
      const base = buildDefaultObject(schema)
      const newObject = merge(base, override)
      objects.push(newObject)
    }
    else {
      const base = schema.parse({})
      objects.push({ ...base, ...override })
    }
  })
  return objects
}
```

The above is effectively the same code as before, however it's now encapsulating the parsing internally so users don't have to manually do so or know detailed information about Zod's parsing method. As you might have guessed from reading through the if/else statement included, we've also solved the preservation of nested objects and arrays through the use of a recursive builder function that parses each value and returns its default values specified in the Zod schema.

The above is quite a bit to wrap your head around, but the result is that a user can do the following:

```typescript
const UserSchema = z.object({
  id: z.string().default('1'),
  name: z.string().default('Craig R Broughton'),
  settings: z.object({
    theme: z.enum(['light', 'dark']),
    notifications: z.boolean()
  }).default({
    theme: 'dark',
    notifications: true,
  })
});

const user = zodObjectBuilder({
  schema: UserSchema,
  config: { preserveNestedDefaults: true },
  overrides: { name: 'My new name', settings: { theme: 'dark' } }
}); // returns a full user object with the overrides, including nested values!
```

When providing the `preserveNestedDefaults` configuration option to the builder, a user can preserve the key value pairs within a nested object or array! This solves the issue of a user overriding a key that is not a primitive type like a string, and is instead a more complex type — and retains all the values minus the ones we choose to override.

This has already been quite a read, so let us end with the result of all our hard work. Let's revisit that first mock, and how we could write it with `zodObjectBuilder`. First let's define our types and our default values, and pass the resulting schema into the `zodObjectBuilder`:

```typescript
const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string()
}).default({
  street: "123 Pine Street",
  city: "Portland",
  state: "OR",
  zipCode: "97201",
  country: "USA"
});

const customerInfoSchema = z.object({
  id: z.string().regex(/^CUST-\d{4}$/),
  name: z.string().min(1),
  email: z.string().email(),
  shippingAddress: addressSchema
}).default({
  id: "CUST-1234",
  name: "Alice Johnson",
  email: "alice.j@email.com",
});

const paymentInfoSchema = z.object({
  method: z.enum(['credit_card', 'paypal']),
  status: z.enum(['completed', 'pending', 'failed']),
  transactionId: z.string()
}).default({
  method: 'credit_card',
  status: 'pending',
  transactionId: 'TXN-88776655'
});

const orderItemSchema = z.object({
  productId: z.string().regex(/^PROD-\d{3}$/),
  name: z.string().min(1),
  quantity: z.number().int().positive(),
  pricePerUnit: z.number().positive(),
  color: z.string().optional(),
  size: z.enum(['XS', 'S', 'M', 'L', 'XL', 'XXL']).optional(),
  variety: z.string().optional(),
  weight: z.enum(['8oz', '12oz', '16oz', '1lb']).optional()
}).default({
  productId: "PROD-001",
  name: "Sample Product",
  quantity: 1,
  pricePerUnit: 29.99,
  color: "Black",
  size: "M"
});

const generateOrderId = () => {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `ORD-${year}-${randomNum}`;
};

const orderSchema = z.object({
  orderId: z.string().regex(/^ORD-\d{4}-\d{3}$/).default(generateOrderId()),
  customerInfo: customerInfoSchema,
  orderDate: z.string().datetime().default(new Date().toISOString()),
  items: z.array(orderItemSchema).min(1).default([orderItemSchema.parse(undefined)]),
  paymentInfo: paymentInfoSchema,
  subtotal: z.number().positive().default(29.99),
  shippingCost: z.number().nonnegative().default(5.99),
  tax: z.number().nonnegative().default(3.00),
  totalAmount: z.number().positive().default(38.98),
  status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']).default('pending'),
  trackingNumber: z.string().default('1Z999AA1234567890')
});

const orderItem = zodObjectBuilder({
  schema: orderSchema,
});
```

The above implementation will return a single object using all of the default values! But we can do better than that — we can now (with the help of a few overload definitions and internal parsing) create arrays of objects, perfect for the use case of mocking API responses:

```typescript
const orders = zodObjectBuilder({
  schema: orderSchema,
  config: { preserveNestedDefaults: true },
  overrides: [
    { // Each object is a fully defined object with the default values! :)
      status: "delivered"
    },
    {
      status: "shipped"
    },
    {
      status: "pending"
    },
    {
      status: "processing"
    },
    {
      status: "cancelled"
    },
  ]
});
```

The above outputs an array of orders with the full default values, with overridden delivery statuses! Hopefully this demonstrates how `zodObjectBuilder` can minimise the effort required to create a new mock based on a reliable type-safe schema.

With that little demonstration we've reached the end of my first article 🙂 I hope you've enjoyed reading this journey of exploration into improving mocking. `zodObjectBuilder` is still being built, but it's serving my needs well to minimise mocked objects. If you'd like to play around with the current version, you can find it at [npmjs.com/package/@crbroughton/ts-utils](https://www.npmjs.com/package/@crbroughton/ts-utils) which includes the function.
