<script lang="ts">
	import "$lib/styles/app.pcss";

	import Nav from "$lib/components/Nav.svelte";

	import PageLoader from "$lib/components/PageLoader.svelte";
	import { navigating } from "$app/stores";

	import Footer from "$lib/components/Footer.svelte";
	import Fa from "svelte-fa";
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import { svelteIcon, szlgIcon } from "$lib/customIcons";
	import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
	<Nav title="Kirándulás Blog 2022" icon={faGlobeEurope}>
		<ul class="menu menu-horizontal gap-1" slot="center">
			<li><a href="nap1">Első nap</a></li>
			<li><a href="nap2">Második nap</a></li>
			<li><a href="nap3">Harmadik nap</a></li>
		</ul>
	</Nav>

	{#if $navigating != null}
		<PageLoader message="Egy pillanat..." />
	{/if}

	<main class="grow">
		<slot />
	</main>

	<Footer>
		<svelte:fragment slot="start">
			<a href="/" class="icon">
				<Fa icon={faGlobeEurope} size="3x" />
			</a>
			<div class="flex flex-col">
				<span class="font-semibold uppercase">2022 - SZENT LÁSZLÓ GIMNÁZIUM, BUDAPEST</span>
				<span class="opacity-50 italic text-xs"
					>A weboldalt készítette Makai Tamás és Mélykuti Ádám</span
				>
			</div>
		</svelte:fragment>

		<svelte:fragment slot="end">
			<a rel="external" target="_blank" href="http://szlgbp.hu" class="icon">
				<Fa icon={szlgIcon} size="2x" />
			</a>
			<a
				rel="external"
				target="_blank"
				href="https://github.com/Zsongli/kirandulas-blog-2022"
				class="icon"
			>
				<Fa icon={faGithub} size="2x" />
			</a>
			<a rel="external" target="_blank" href="https://kit.svelte.dev" class="icon">
				<Fa icon={svelteIcon} size="2x" />
			</a>
		</svelte:fragment>
	</Footer>
</template>
