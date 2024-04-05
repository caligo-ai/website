<script lang="ts">
	import Hero from './Hero.svelte';
	import HeroText from './HeroText.svelte';

	import algorithm from '$lib/img/algorithm.webp';
	import bird from '$lib/img/bird.webp';
	import fingerprint from '$lib/img/obfuscated-fingerprint-symmetrical.webp';
	import future from '$lib/img/future.webp';
	import padlock from '$lib/img/padlock.webp';
	import portraitBonato from '$lib/img/portrait_bonato.jpeg';
	import portraitDeCeglia from '$lib/img/portrait_de_ceglia.jpeg';
	import portraitZamuner from '$lib/img/portrait_zamuner.jpeg';

	const profiles = [
		{
			name: 'Leo Bonato',
			degree: 'PhD Physics',
			role: 'Co-founder',
			img: portraitBonato,
			linkedin: 'https://www.linkedin.com/in/leo-bonato/'
		},
		{
			name: 'Roberta De Ceglia',
			degree: 'PhD Translational Medicine',
			role: 'Co-founder',
			img: portraitDeCeglia,
			linkedin: 'https://www.linkedin.com/in/robertadeceglia/'
		},
		{
			name: 'Stefano Zamuner',
			degree: 'PhD Physics',
			role: 'Co-founder',
			img: portraitZamuner,
			linkedin: 'https://www.linkedin.com/in/stefano-zamuner/'
		}
	];
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

	<div class="prose mb-48 w-full max-w-3xl prose-a:text-secondary" id="about">
		<h1 class="text-center">About us</h1>
		<div class="flex flex-row justify-evenly">
			{#each profiles as profile (profile.name)}
				<div class="flex flex-col items-center">
					<img src={profile.img} alt={profile.name} class="mb-4 h-48 w-48 rounded-full" />
					<p class="m-0 text-lg font-bold">{profile.name}</p>
					<p class="m-0 mb-2 text-sm">{profile.degree}</p>
					<p class="m-0 mb-2">{profile.role}</p>
					<a href={profile.linkedin}>LinkedIn</a>
				</div>
			{/each}
		</div>
	</div>
</div>
