<script lang="ts">
	import Hero from './Hero.svelte';
	import HeroText from './HeroText.svelte';

	import fingerprint from '$lib/img/obfuscated-fingerprint-symmetrical.webp';
	import privacy from '$lib/img/privacy.webp';
	import processing from '$lib/img/processing.webp';
	import mandala from '$lib/img/mandala.webp';
	import isolated from '$lib/img/isolated.webp';
	import AboutUs from './AboutUs.svelte';

	import { base } from '$app/paths';
</script>

<div class="flex flex-col items-center">
	<Hero background={fingerprint} id="top">
		<img src="{base}/logo-white.svg" alt="caligo logo" class="mb-5" />
		<p class="mb-16 text-2xl font-bold italic">generative AI that doesn't steal your data</p>
		<a href="mailto:info@caligo.ai" class="btn-secondary-content btn">Get in touch</a>
	</Hero>

	<HeroText background={privacy} title="AI designed for privacy">
		Caligo allows you to leverage the benefits of modern AI technologies without compromising on the
		confidentiality of your data. Our proprietary algorithm enables AI to process directly encrypted
		data, without ever decrypting it. This means you can harness the power of artificial
		intelligence while keeping your data completely secure.
	</HeroText>

	<HeroText background={processing} title="We can't steal your data - because we don't have it">
		Our unique approach to AI ensures that your data is never stored or shared. Instead, our
		algorithm processes your data in real-time, without ever decrypting it. This means that you can
		run AI pipelines on confidential data such as medical records, legal records, financial
		information, and more, without ever having to worry about data breaches or privacy violations.
	</HeroText>

	<HeroText background={isolated} title="Tailored to your needs">
		Our models can be fine-tuned to meet your specific requirements, again without ever exposing
		your training data -- not even to us. Your model runs on an isolated instance, and all training
		data is obfuscated on your premises before being transmitted.
	</HeroText>

	<HeroText background={mandala} title="Mission" id="mission">
		Become the go-to partner in AI automation involving private and sensitive data.
	</HeroText>

	<AboutUs />
</div>
