<script lang="ts">
	import Hero from './Hero.svelte';

	export let background: string;
	export let id: string | null = null;
	export let title: string;
</script>

<Hero {background} {id}>
	<h1 class="text-center">{title}</h1>
	<p class="mb-16 text-center text-xl font-semibold">
		<slot />
	</p>
</Hero>
