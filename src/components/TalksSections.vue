<script setup lang="ts">
import GridContainer from "./GridContainer.vue";
import Heading from './Heading.vue';
import Paragraph from './Paragraph.vue'

</script>

<template>
	<GridContainer class="h-full">
		<template #top-left>
			<Heading size="h1">A Cosmic Voyage Through Front End Development</Heading>
			<Paragraph>
				Take a cosmic journey through lifecycle of a front end component.
			</Paragraph>
			<Paragraph>
				This presentation attempts to demonstrate the process
				of building a component from the most atomic tokens,
				composition of smaller components, all the way through to a fully functioning component.
			</Paragraph>
		</template>
	</GridContainer>
</template>