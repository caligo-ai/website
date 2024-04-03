<script lang="ts">
	import portraitBonato from '$lib/img/portrait_bonato.jpeg';
	import portraitDeCeglia from '$lib/img/portrait_de_ceglia.jpeg';
	import portraitZamuner from '$lib/img/portrait_zamuner.jpeg';
	import heroBackground from '$lib/img/obfuscated-fingerprint-symmetrical.webp';
	import future from '$lib/img/future.webp';
	import padlock from '$lib/img/padlock.webp';
	import algorithm from '$lib/img/algorithm.webp';

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
				<p class="mb-16 rounded text-xl font-bold italic">
					generative AI that doesn't steal your data
				</p>
				<a href="mailto:info@caligo.ai" class="btn-secondary-content btn">Get in touch</a>
			</div>
		</div>
	</div>

	<div class="prose mb-48 w-full max-w-5xl prose-a:text-secondary">
		<h1 class="text-center">Envision a Future Where Privacy and AI Coexist</h1>
		<div class="flex items-center">
			<img src={future} alt="future" class="h-96 rounded object-cover" />
			<p class="pl-24 text-right">
				Imagine a world where advanced AI can enhance our lives without compromising our privacy.
				Where video surveillance ensures public safety without infringing on personal freedoms, and
				companies leverage AI automation without exposing their sensitive data. At Caligo, we're not
				just imagining this world; we're building it.
			</p>
		</div>
	</div>

	<div class="prose mb-48 w-full max-w-5xl prose-a:text-secondary">
		<h1 class="text-center">The Privacy Paradox in Today's AI</h1>
		<div class="flex items-center">
			<p class="pr-24">
				In an era where data is king, the conventional use of artificial intelligence poses a
				paradox; it demands access to vast amounts of personal and sensitive data, risking privacy
				and security. Businesses and individuals alike are forced to choose between innovation and
				privacy.
			</p>
			<img src={padlock} alt="padlock" class="h-96 rounded object-cover" />
		</div>
	</div>

	<div class="prose mb-48 w-full max-w-5xl prose-a:text-secondary">
		<h1 class="text-center">Revolutionizing AI with Encryption-in-Use Technology</h1>
		<div class="flex items-center">
			<img src={algorithm} alt="algorithm" class="h-96 rounded object-cover" />
			<p class="pl-24 text-right">
				Caligo is pioneering a groundbreaking solution. Our proprietary algorithm enables AI to
				process directly encrypted data, without ever decrypting it. This means you can harness the
				power of artificial intelligence while keeping your data completely secure.
			</p>
		</div>
	</div>

	<div class="prose mb-48 w-full max-w-3xl prose-a:text-secondary" id="mission">
		<h1 class="text-center">Mission</h1>
		<p class="text-center">
			Our mission is to seamlessly integrate advanced AI with ironclad privacy. We are dedicated to
			developing advanced AI technologies that enhance public safety, drive innovation, and empower
			businesses, all while upholding stringent privacy standards. Through our encryption-in-use
			technology, we ensure that personal and corporate data remains secure, paving the way for a
			world where technological progress does not come at the expense of privacy. At Caligo, we
			believe in protecting what's valuable — your privacy, your data, and your trust.
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
