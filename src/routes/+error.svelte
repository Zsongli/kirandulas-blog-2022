<script lang="ts">
	import "$lib/styles/glitch.pcss";
	import { page } from "$app/stores";
	import Fa from "svelte-fa";
	import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

	const messages: Record<number, string> = {
		400: "Hibás kérelem",
		401: "Azonosítás szükséges",
		403: "Jogosultság szükséges",
		404: "Az oldal nem található",
		406: "Nem elfogadható",
		408: "A kérés túllépte a megengedett időtartamot",
		500: "Belső szerverhiba",
		501: "Nincs megvalósítva",
		502: "Rossz átjáró"
	};
</script>

<template>
	<div
		class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center justify-center gap-20"
	>
		<div class="flex flex-col items-center justify-center">
			<div class="fixed opacity-5">
				<Fa icon={faTriangleExclamation} size="12x" />
			</div>
			<div class="glitch-wrapper">
				<h1 class="glitch text-3xl font-semibold" data-text={$page.status}>{$page.status}</h1>
			</div>
			<h2 class="text-xl">{messages[$page.status] ?? $page.error?.message}</h2>
		</div>

		<p>
			Őszintén sajnáljuk. Megpróbálhatsz másra keresni, vagy visszatérhetsz a
			<a class="link" href="/">főoldalra</a>.
		</p>
	</div>
</template>
