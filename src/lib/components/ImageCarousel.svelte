<script lang="ts">
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";

	export var images: { src: string; title: string; alt?: string }[];
	export var imageFit: "cover" | "contain" | "fill" | "none" | "scale-down" = "cover";
	export var imagePosition:
		| "center"
		| "top"
		| "bottom"
		| "left"
		| "right"
		| "left bottom"
		| "left top"
		| "right bottom"
		| "right top" = "center";
	export var scrollInterval = 5000;

	var selected = 0;

	function shuffle<T>(array: T[]): T[] {
		return array.sort(() => Math.random() - 0.5);
	}
	$: shuffledImages = shuffle(images);

	function setupScrolling(scrollInterval: number) {
		clearInterval(intervalId);
		intervalId = setInterval(() => {
			selected = (selected + 1) % images.length;
		}, scrollInterval);
	}
	var intervalId: NodeJS.Timer;
	$: setupScrolling(scrollInterval);

	var container: HTMLDivElement;
	var containerRange: { start: number; end: number } = { start: 0, end: 0 };

	onMount(() => {
        shuffle(images);
        setupScrolling(scrollInterval);
		new ResizeObserver(
			(entries) =>
				(containerRange = {
					start: entries[0].contentRect.left - entries[0].contentRect.width,
					end: entries[0].contentRect.right
				})
		).observe(container);
	});
</script>

<template>
	<div {...$$restProps} bind:this={container}>
		{#each [shuffledImages[selected]] as { src, title, alt } (selected)}
			<img
				{src}
				{title}
				alt={alt ?? title}
				class="block object- absolute top-0 left-0 w-full h-full"
				style="object-fit: {imageFit}; object-position: {imagePosition};"
				in:fly|local={{ x: containerRange.end, duration: 1000, opacity: 1 }}
				out:fly|local={{ x: containerRange.start, duration: 1000, opacity: 1 }}
			/>
			<div
				transition:fade|local={{ duration: 500 }}
				class="badge badge-md lg:badge-lg bg-opacity-50 absolute bottom-3 right-3"
			>
				{title}
			</div>
		{/each}
	</div>
</template>
