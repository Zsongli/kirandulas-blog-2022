<script lang="ts">
	import "$lib/styles/app.pcss";
	import Footer from "$lib/components/Footer.svelte";
	import { navigating } from "$app/stores";
	import PageLoader from "$lib/components/PageLoader.svelte";
</script>

{#if $navigating != null}
	<PageLoader message="Egy pillanat..."/>
{/if}

<main class="grow">
	<slot />
</main>

<Footer />
