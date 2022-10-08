<script lang="ts">
	import "$lib/styles/app.pcss";

	import PageLoader from "$lib/components/PageLoader.svelte";
	import { navigating } from "$app/stores";
	
	import Footer from "$lib/components/Footer.svelte";
	import Fa from "svelte-fa";
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import { svelteIcon, szlgIcon } from "$lib/customIcons";
	import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
</script>

{#if $navigating != null}
	<PageLoader message="Egy pillanat..." />
{/if}

<main class="grow">
	<slot />
</main>

<Footer>
	<svelte:fragment slot="left">
		<a href="/" class="link">
			<Fa icon={faGlobeEurope} size="3x" />
		</a>
		<div class="flex flex-col">
			<span class="font-semibold capitalize">2022 - SZENT LÁSZLÓ GIMNÁZIUM, BUDAPEST</span>
			<span class="opacity-25 italic text-xs"
				>A weboldalt készítette Makai Tamás és Mélykuti Ádám</span
			>
		</div>
	</svelte:fragment>
	
	<svelte:fragment slot="right">
		<a rel="external" target="_blank" href="http://szlgbp.hu" class="link">
			<Fa icon={szlgIcon} size="2x" />
		</a>
		<a
			rel="external"
			target="_blank"
			href="https://github.com/Zsongli/kirandulas-blog-2022"
			class="link"
		>
			<Fa icon={faGithub} size="2x" />
		</a>
		<a rel="external" target="_blank" href="https://kit.svelte.dev" class="link">
			<Fa icon={svelteIcon} size="2x" />
		</a>
	</svelte:fragment>
</Footer>
