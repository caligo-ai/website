<script lang="ts">
	export let background: string;
	export let id: string | null = null;
</script>

<div class="hero mb-48 w-full bg-secondary" style={`background-image: url(${background});`} {id}>
	<div class="hero-overlay h-full bg-opacity-70" />
	<div class="hero-content pb-32 pt-48 text-center">
		<div class="prose max-w-xl">
			<slot />
		</div>
	</div>
</div>
