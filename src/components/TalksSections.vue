<script setup lang="ts">
import Heading from './Heading.vue';
import Paragraph from './Paragraph.vue'
</script>

<template>
	<a href="/talks/voyage">
		<div
			class="customContainer overflow-scroll relative flex flex-col gap-4  p-10 w-full h-full bg-gray-900 hover:bg-slate-200 text-white hover:text-slate-900 transition-colors">

			<Heading size="h1">A Cosmic Voyage Through Front End Development</Heading>
			<Paragraph>
				Take a cosmic journey through lifecycle of a front end component.
			</Paragraph>
			<Paragraph>
				This presentation attempts to demonstrate the process
				of building a component from the most atomic tokens,
				composition of smaller components, all the way through to a fully functioning component.
			</Paragraph>
		</div>
	</a>
</template>