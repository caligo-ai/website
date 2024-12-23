<script lang="ts">
	import portraitBonato from '$lib/img/portrait_bonato.jpeg';
	import portraitDeCeglia from '$lib/img/portrait_de_ceglia.jpeg';
	import portraitWest from '$lib/img/portrait_west.jpeg';
	import IconLinkedIn from './IconLinkedIn.svelte';

	const profiles = [
		{
			name: 'Leo Bonato',
			degree: 'Software engineer',
			role: 'Co-founder',
			img: portraitBonato,
			linkedin: 'https://www.linkedin.com/in/leo-bonato/'
		},
		{
			name: 'Roberta De Ceglia',
			degree: 'Project manager',
			role: 'Co-founder',
			img: portraitDeCeglia,
			linkedin: 'https://www.linkedin.com/in/robertadeceglia/'
		},
		{
			name: 'Kumeshnee West',
			degree: 'Business developer',
			role: 'Co-founder',
			img: portraitWest,
			linkedin: 'https://www.linkedin.com/in/kumeshneewest/'
		}
	];
</script>

<div class="prose mb-48 w-full max-w-3xl prose-a:text-secondary" id="about">
	<h1 class="text-center">About us</h1>
	<div class="flex flex-row justify-evenly">
		{#each profiles as profile (profile.name)}
			<div class="flex flex-col items-center">
				<div class="relative mb-4 h-48 w-48">
					<img
						src={profile.img}
						alt={profile.name}
						class="absolute m-0 h-full w-full rounded-full"
					/>
					<div class="absolute h-full w-full rounded-full bg-secondary-content bg-opacity-30" />
					<IconLinkedIn href={profile.linkedin} />
				</div>
				<p class="m-0 text-lg font-bold">{profile.name}</p>
				<p class="m-0 mb-2 text-sm">{profile.degree}</p>
				<p class="m-0 mb-2">{profile.role}</p>
				<a href={profile.linkedin}>LinkedIn</a>
			</div>
		{/each}
	</div>
</div>
