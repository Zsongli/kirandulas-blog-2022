<script lang="ts">
	import Fa from "svelte-fa";
	import { faClose } from "@fortawesome/free-solid-svg-icons";

	import { scaleflyTo, scaleflyFrom } from "$lib/scalefly";
	import { fade } from "svelte/transition";
	import { cubicIn, cubicOut } from "svelte/easing";

	export var animationDuration = 400;
	export var desc: string;
	export var source: string = "";

	var show = false;
	var figure: HTMLElement;
	var fullImage: HTMLElement;

	var translationOffset: { offsetX: number; offsetY: number };
	var thumbnailSize: { scaleX: number; scaleY: number };

	function showFull(value: boolean) {
		const figureRect = figure.getBoundingClientRect();
		thumbnailSize = {
			scaleX: figureRect.width / window.innerWidth,
			scaleY: figureRect.height / window.innerHeight
		};
		translationOffset = {
			offsetX: figureRect.x + figureRect.width / 2 - window.innerWidth / 2, // assuming the image's center point is at the center of the viewport
			offsetY: figureRect.y + figureRect.height / 2 - window.innerHeight / 2
		};

		if (value) {
			document.documentElement.style.overflow = "hidden";
			show = true;
		} else {
			document.documentElement.style.overflow = "auto";
			show = false;
		}
	}

	function keyPressed(e: KeyboardEvent) {
		if (!show || e.key !== "Escape") return;
		showFull(false);
	}
</script>

<svelte:window on:keyup={keyPressed} />

<template>
	{#if show}
		<div
			class="fixed top-0 left-0 w-full h-screen z-50 bg-black bg-opacity-75"
			in:fade={{ duration: animationDuration, easing: cubicOut }}
			out:fade={{ duration: animationDuration, easing: cubicIn }}
		>
			<div
				class="w-full h-full relative flex flex-col items-center justify-center shrink gap-4 p-8 text-center"
			>
				<div class="flex items-center gap-4 justify-evenly w-fit">
					<button
						class="btn glass rounded-full aspect-square opacity-50 hover:opacity-100 transition-opacity"
						on:click={() => showFull(false)}
					>
						<Fa icon={faClose} size="1.25x"/>
					</button>
					<h1 class="font-semibold text-lg md:text-2xl">{desc}</h1>
				</div>
				<img
					{...$$restProps}
					class="max-h-full block rounded-box bg-base-300 shadow-2xl"
					alt={$$props.alt ?? desc}
					loading="lazy"
					decoding="async"
					bind:this={fullImage}
					in:scaleflyFrom={{
						duration: animationDuration,
						easing: cubicOut,
						scaleX: thumbnailSize.scaleX,
						scaleY: thumbnailSize.scaleX,
						...translationOffset
					}}
					out:scaleflyTo={{
						duration: animationDuration,
						easing: cubicIn,
						...thumbnailSize,
						...translationOffset
					}}
				/>
				<a class="link italic opacity-50 text-xs lg:text-base" href={source} rel="external" target="_blank">{source}</a>
			</div>
		</div>
	{/if}

	<div class="card bg-base-100 shadow-xl text-center {$$props.class ?? ''}">
		<figure class="overflow-hidden" bind:this={figure} on:click={() => showFull(true)}>
			<img
				{...$$restProps}
				class="hover:scale-[102%] transition-transform cursor-pointer"
				alt={$$props.alt ?? desc}
				title={$$props.title ?? desc}
				loading="lazy"
				decoding="async"
			/>
		</figure>
		<div class="card-body items-center justify-evenly gap-0 p-2 sm:p-4">
			<span class="card-title text-base sm:text-lg block w-fit" on:click>{desc}</span>
		</div>
	</div>
</template>
