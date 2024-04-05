<script lang="ts">
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
