<script>
	import '../app.pcss';
</script>

<div class="flex h-screen flex-col items-center overflow-hidden">
	<div class="navbar gap-10 bg-base-100">
		<a href="/"><img src="/logo-white.svg" alt="caligo logo" class="mx-5 max-h-5" /></a>
		<a class="btn btn-ghost" href="mailto:info@caligo.ai">Get in touch</a>
		<a class="btn btn-ghost" href="/#mission">Mission</a>
		<a class="btn btn-ghost" href="/#about">About</a>
	</div>

	<main class="w-full overflow-scroll">
		<slot />

		<footer class="footer footer-center gap-1">
			<p>© Caligo 2024</p>
			<a href="/impressum">Impressum</a>
			<a href="/privacy">Privacy policy</a>
		</footer>
	</main>
</div>
