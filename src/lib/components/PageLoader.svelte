<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import {navigating} from "$app/stores";

	export var showAfter = 500;
	export var fadeInDuration = 100;
	export var fadeOutDuration = 50;
	export var message: string = "Töltés...";

	var show = false;
	onMount(() => {
		setTimeout(()=>{
			show = true;
		}, showAfter);
	}); // so it doesn't show up on fast loads
</script>

{#if show && $navigating != null}
	<div
		class="fixed w-screen h-screen bg-base-300 z-50"
		in:fade={{ duration: fadeInDuration }}
		out:fade={{ duration: fadeOutDuration }}
	>
		<div
			class="flex flex-col items-center justify-center gap-5 text-center w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
		>
			<h2 class="text-xl font-semibold">{message}</h2>
			<progress class="progress progress-primary bg-base-100" />
		</div>
	</div>
{/if}
