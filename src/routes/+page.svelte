<script lang="ts">
	import portraitBonato from '$lib/img/portrait_bonato.jpeg';
	import portraitDeCeglia from '$lib/img/portrait_de_ceglia.jpeg';
	import portraitZamuner from '$lib/img/portrait_zamuner.jpeg';
	import heroBackground from '$lib/img/obfuscated-fingerprint.jpg';

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
	<div class="hero mb-48 w-full bg-secondary" style={`background-image: url(${heroBackground});`}>
		<div class="hero-overlay h-full bg-opacity-50" />
		<div class="hero-content pb-32 pt-48 text-center">
			<div class="max-w-xl">
				<img src="/logo-white.svg" alt="caligo logo" class="mb-5" />
				<p class="mb-16 rounded text-xl italic">generative AI that doesn't steal your data</p>
				<a href="mailto:info@caligo.ai" class="btn-secondary-content btn">Get in touch</a>
			</div>
		</div>
	</div>

	<div class="prose mb-48 w-full max-w-3xl prose-a:text-secondary" id="mission">
		<h1 class="text-center">Mission</h1>
		<p class="text-center">
			We are a team of scientists and engineers who believe that AI can be used to improve the world
			without compromising privacy.
		</p>
		<p class="text-center">
			We are developing a new generation of AI algorithms that can be used to generate synthetic
			data, preserving the privacy of the individuals who contributed to its creation.
		</p>
		<p class="text-center">
			Our mission is to make AI more ethical and privacy-preserving, and to enable the development
			of new applications that are currently hindered by privacy concerns.
		</p>
	</div>

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
