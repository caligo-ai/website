<script>
	import '../app.pcss';
	import {base} from "$app/paths"
</script>

<div class="flex h-screen flex-col items-center overflow-hidden">
	<div class="navbar gap-10 bg-base-100">
		<a href="{base}/"><img src="{base}/logo-white.svg" alt="caligo logo" class="mx-5 max-h-5" /></a>
		<a class="btn btn-ghost" href="mailto:info@caligo.ai">Get in touch</a>
		<a class="btn btn-ghost" href="{base}/#mission">Mission</a>
		<a class="btn btn-ghost" href="{base}/#about">About</a>
	</div>

	<main class="w-full overflow-y-scroll">
		<slot />

		<footer class="footer footer-center gap-1">
			<p>© Caligo 2024</p>
			<a href="{base}/impressum">Impressum</a>
			<a href="{base}/privacy">Privacy policy</a>
		</footer>
	</main>
</div>
