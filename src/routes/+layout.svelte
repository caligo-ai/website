<script>
	import '../app.pcss';
</script>

<div class="flex h-svh flex-col items-center overflow-hidden">
	<div class="navbar gap-10 bg-base-100">
		<a class="btn btn-ghost" href="#mission">Mission</a>
		<a class="btn btn-ghost" href="#about">About</a>
	</div>

	<main class="flex w-full flex-col items-center overflow-scroll">
		<slot />
	</main>
</div>
