<script lang="ts">
	import Hero from './Hero.svelte';
	import HeroText from './HeroText.svelte';

	import algorithm from '$lib/img/algorithm.webp';
	import bird from '$lib/img/bird.webp';
	import fingerprint from '$lib/img/obfuscated-fingerprint-symmetrical.webp';
	import future from '$lib/img/future.webp';
	import padlock from '$lib/img/padlock.webp';
	import AboutUs from './AboutUs.svelte';
</script>

<div class="flex flex-col items-center">
	<Hero background={fingerprint}>
		<img src="/logo-white.svg" alt="caligo logo" class="mb-5" />
		<p class="mb-16 text-2xl font-bold italic">generative AI that doesn't steal your data</p>
		<a href="mailto:info@caligo.ai" class="btn-secondary-content btn">Get in touch</a>
	</Hero>

	<HeroText background={future} title="The Privacy Paradox in Today's AI">
		Imagine a world where advanced AI can enhance our lives without compromising our privacy. Where
		video surveillance ensures public safety without infringing on personal freedoms, and companies
		leverage AI automation without exposing their sensitive data. At Caligo, we're not just
		imagining this world; we're building it.
	</HeroText>

	<HeroText background={padlock} title="The Privacy Paradox in Today's AI">
		In an era where data is king, the conventional use of artificial intelligence poses a paradox;
		it demands access to vast amounts of personal and sensitive data, risking privacy and security.
		Businesses and individuals alike are forced to choose between innovation and privacy.
	</HeroText>

	<HeroText background={algorithm} title="Revolutionizing AI with Encryption-in-Use Technology">
		Caligo is pioneering a groundbreaking solution. Our proprietary algorithm enables AI to process
		directly encrypted data, without ever decrypting it. This means you can harness the power of
		artificial intelligence while keeping your data completely secure.
	</HeroText>

	<HeroText background={bird} title="Mission" id="mission">
		Our mission is to seamlessly integrate advanced AI with ironclad privacy. We are dedicated to
		developing advanced AI technologies that enhance public safety, drive innovation, and empower
		businesses, all while upholding stringent privacy standards. Through our encryption-in-use
		technology, we ensure that personal and corporate data remains secure, paving the way for a
		world where technological progress does not come at the expense of privacy. At Caligo, we
		believe in protecting what's valuable — your privacy, your data, and your trust.
	</HeroText>

	<AboutUs />
</div>
