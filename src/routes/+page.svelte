<script lang="ts">
	import ImageCarousel from "$lib/components/ImageCarousel.svelte";

	const images = [
		{ src: "/img/gyor-viewpoint-1.jpg", title: "Püspökvár-Toronykilátó" },
		{ src: "/img/pannonhalma-b-outside.jpg", title: "Pannonhalmi Főapátság" },
		{src: "/img/radio-listen.jpg", title: "Tardos, Rádiómúzeum" },
		{src: "/img/szombat-is-front.jpg", title: "Iseum Savariense" },
		{src: "/img/tataivar-lakeside.jpg", title: "Tatai vár" },
		{src: "/img/teheneszet-inside.jpg", title: "Nagyszentjános, Biofarm" },
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
			<h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold">
				Üdvözlünk a kirándulási blogunkon!
			</h1>
			<p class="text-base md:text-lg lg:text-xl">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat voluptate eaque tempora
				ut vero ducimus dolorem debitis temporibus minus voluptatibus pariatur deserunt eum harum,
				illo sequi aspernatur, quidem, unde voluptatem laboriosam corrupti. Totam, esse
				voluptatibus? Deleniti dolorem earum, dolorum repudiandae labore ducimus, repellendus minus
				accusamus est porro, veritatis animi veniam!
			</p>
			<a
				href="/nap1"
				class="btn btn-primary xl:btn-lg shadow-primary-focus shadow-lg landscape:shadow-primary-focus landscape:shadow-2xl ring-primary-focus ring-2"
				>Irány az első nap</a
			>
		</div>
		<ImageCarousel
			{images}
			imageFit="cover"
			imagePosition="center"
			class="inline-block relative overflow-hidden shadow-2xl h-[50vh] landscape:h-[inherit] w-full landscape:w-1/2 landscape:m-16 landscape:rounded-box"
		/>
	</section>
</template>
