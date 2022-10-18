<script lang="ts">
	import ImageCarousel from "$lib/components/ImageCarousel.svelte";
	import MapWidget from "$lib/components/MapWidget.svelte";
	import Fa from "svelte-fa";
	import { faChevronDown, faLocationDot, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

	const images = [
		{ src: "/img/homepage/gyor-viewpoint-1.jpg", title: "Püspökvár-Toronykilátó" },
		{ src: "/img/homepage/pannonhalma-b-outside.jpg", title: "Pannonhalmi Főapátság" },
		{ src: "/img/homepage/radio-listen.jpg", title: "Tardos, Rádiómúzeum" },
		{ src: "/img/homepage/szombat-is-front.jpg", title: "Iseum Savariense" },
		{ src: "/img/homepage/tataivar-lakeside.jpg", title: "Tatai vár" },
		{ src: "/img/homepage/teheneszet-inside.jpg", title: "Nagyszentjános, Biofarm" },
		{ src: "/img/homepage/sopron-tuztorony-bottom.jpg", title: "Sopron, Tűztorony" }
	];

	const markers = [
		{ title: "Kőbányai Szent László Gimnázium", lat: 47.488727829030125, lng: 19.134882738885207 },
		{ title: "Rádiómúzeum", lat: 47.66338350247221, lng: 18.448982251586497 },
		{ title: "Tatai vár", lat: 47.648640589235086, lng: 18.319520874836044 },
		{ title: "Biofarm", lat: 47.70733160824184, lng: 17.873065721287293 },
		{ title: "Pannonhalmi Főapátság", lat: 47.55212189093849, lng: 17.76210803177803 },
		{ title: "Csalogány Tábor", lat: 47.510918562956874, lng: 16.91383761868843 },
		{ title: "Esterházy-kastély", lat: 47.620475234878626, lng: 16.87183970943691 },
		{
			title: "Fertőrákosi Kőfejtő és Barlangszínház",
			lat: 47.726620945288744,
			lng: 16.64464696958124
		},
		{ title: "Tűztorony", lat: 47.68672137691359, lng: 16.591319398416175 },
		{ title: "Jurisics Vár", lat: 47.38967745214508, lng: 16.538460540734803 },
		{ title: "Iseum Savariense", lat: 47.22892311250915, lng: 16.621828815038185 },
		{ title: "Püspökvár-Toronykilátó", lat: 47.68897661451554, lng: 17.630242349230368 }
	];
</script>

<svelte:head>
	<title>Kirándulás Blog 2022 - Főoldal</title>
</svelte:head>

<template>
	<section
		class="items-stretch flex flex-col-reverse landscape:flex-row justify-end landscape:justify-around relative overflow-x-hidden landscape:min-h-[calc(100vh-4rem)]"
	>
		<div
			class="flex flex-col items-stretch landscape:items-start justify-center gap-8 p-8 landscape:p-16 self-center max-w-4xl w-full landscape:w-1/2 text-center landscape:text-left"
		>
			<h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold w-full">
				Üdvözlünk a kirándulási blogunkon!
			</h1>
			<p class="text-base md:text-lg lg:text-xl w-full">
				A Kőbányai Szent László Gimnázium 2020-as F osztálya bemutatja a legújabb tanulmányi
				kirándulási blogját. Minden tanévben újabb és újabb helyszíneket látogatunk meg, majd
				leírjuk tapasztalatainkat. Tarts velünk nyugat-magyarországi kalandunkon, és fedezd fel a
				régió legérdekesebb látnivalóit! Kezdj olvasni, és ne maradj le ennek az évnek a tartalmáról
				sem!
			</p>
			<div class="w-full flex flex-col landscape:flex-row flex-wrap gap-4">
				<a
					href="/nap1"
					class="btn btn-primary xl:btn-lg shadow-primary-focus shadow-lg landscape:shadow-primary-focus landscape:shadow-2xl ring-primary-focus ring-2 gap-4"
					>Irány az első nap<Fa icon={faAnglesRight}/></a
				>
				<a href="#utvonal" class="btn btn-secondary xl:btn-lg gap-4"
					>Útvonal megtekintése<Fa icon={faChevronDown} /></a
				>
			</div>
		</div>
		<ImageCarousel
			{images}
			imageFit="cover"
			imagePosition="center"
			class="inline-block relative overflow-hidden shadow-2xl h-[50vh] landscape:h-[inherit] w-full landscape:w-1/2 landscape:m-16 landscape:rounded-box"
		/>
	</section>
	<section
		id="utvonal"
		class="items-stretch flex flex-col-reverse landscape:flex-row justify-end landscape:justify-around relative overflow-x-hidden landscape:min-h-[480px] bg-base-300 p-4 landscape:p-0"
	>
		<MapWidget
			class="inline-block relative overflow-hidden shadow-accent-focus shadow-lg landscape:shadow-accent-focus landscape:shadow-xl h-[360px] landscape:h-[inherit] w-full landscape:w-1/2 landscape:m-8 rounded-box max-w-2xl m-auto"
			bounds={{
				sw: { lat: 48.6590427, lng: 15.7873599 },
				ne: { lat: 45.6957106, lng: 23.2025655 }
			}}
			position={{ lat: 47.477081, lng: 17.759113 }}
			minZoom={7}
			zoom={8}
			{markers}
			markerConnecions={[0, 1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 10, 11, 0]}
		/>
		<div
			class="flex flex-col items-stretch landscape:items-start justify-center gap-6 p-6 landscape:p-16 self-center max-w-3xl w-full landscape:w-1/2 text-center landscape:text-left"
		>
			<div
				class="w-full flex flex-row items-center justify-center landscape:justify-start text-xl md:text-2xl lg:text-3xl font-semibold gap-4"
			>
				<Fa icon={faLocationDot} />
				<h2 class="">Útvonalunk</h2>
			</div>
			<p class="text-base md:text-lg w-full">
				Az interaktív térképen felfedezheted a három nap alatt megtett utunkat. A kijelölt pöttyök
				az egyes állomások helyszíneit mutatják, az egérmutatót feléjük helyezvén meg is
				jelenítheted az aktuális helyszín nevét. Egér esetén görgetéssel, érintőképernyő esetén
				csippentő mozdulattal, vagy pedig a térkép jobb alsó felén található gombokkal közelítheted,
				illetve távolíthatod a nézetet.
			</p>
			<p class="italic">
				Minden a térkép adataival kapcsolatos jog az <a
					class="link"
					href="https://www.openstreetmap.org/copyright"
					rel="external"
					target="_blank">OpenStreetMap</a
				>© közreműködőit illeti.
			</p>
		</div>
	</section>
</template>
