<script>
	import '../app.pcss';
	import { base } from '$app/paths';
</script>

<div class="grid h-screen grid-rows-[70px_auto] overflow-hidden">
	<div class="navbar h-[70px] gap-10 self-center bg-base-100">
		<a href="{base}/#top">
			<img src="{base}/logo-white.svg" alt="caligo logo" class="mx-5 max-h-5" />
		</a>
		<a class="btn btn-ghost" href="mailto:info@caligo.ai">Get in touch</a>
		<a class="btn btn-ghost" href="{base}/#mission">Mission</a>
		<a class="btn btn-ghost" href="{base}/#about">About</a>
	</div>

	<main class="w-full self-start overflow-y-scroll flex flex-col justify-between h-full">
		<slot />

		<footer class="footer footer-center mb-6 gap-1">
			<p>© Caligo 2024</p>
			<!-- <a href="{base}/impressum">Impressum</a>
			<a href="{base}/privacy">Privacy policy</a> -->
		</footer>
	</main>
</div>
