<script lang="ts">
	import Fa from "svelte-fa";
	import { faClose } from "@fortawesome/free-solid-svg-icons";

	import { scaleflyTo, scaleflyFrom } from "$lib/scalefly";
	import { fade } from "svelte/transition";
	import { cubicIn, cubicOut } from "svelte/easing";

	export var animationDuration = 400;
	export var src: string;
	export var title: string;
	export var source: string | undefined = undefined;

	var showFull = false;
	var doneLoadingThumbnail: boolean = false;
	var figure: HTMLElement;
	var fullImage: HTMLElement;

	var translationOffset: { offsetX: number; offsetY: number };
	var thumbnailSize: { scaleX: number; scaleY: number };

	function setShowFull(value: boolean) {

		const figureRect = figure.getBoundingClientRect();
		
		translationOffset = {
			offsetX: figureRect.x + figureRect.width / 2 - window.innerWidth / 2, // assuming the image's center point is at the center of the viewport
			offsetY: figureRect.y + figureRect.height / 2 - window.innerHeight / 2
		};

		if(window.innerHeight > window.innerWidth) {
			thumbnailSize = {
				scaleX: figureRect.width / window.innerWidth,
				scaleY: figureRect.height / (window.innerWidth * (figureRect.height / figureRect.width))
			};
		} else {
			thumbnailSize = {
				scaleX: figureRect.width / (window.innerHeight * (figureRect.width / figureRect.height)),
				scaleY: figureRect.height / window.innerHeight
			};
		}

		if (value) {
			document.documentElement.style.overflow = "hidden";
			showFull = true;
		} else {
			document.documentElement.style.overflow = "auto";
			showFull = false;
		}
	}

	function keyPressed(e: KeyboardEvent) {
		if (!showFull || e.key !== "Escape") return;
		setShowFull(false);
	}
</script>

<svelte:window on:keyup={keyPressed} />

<template>
	{#if showFull}
		<div
			class="fixed top-0 left-0 w-full h-screen z-50 bg-black bg-opacity-75 flex flex-col items-center justify-center"
			in:fade={{ duration: animationDuration, easing: cubicOut }}
			out:fade={{ duration: animationDuration, easing: cubicIn }}
		>
			<div
				class="w-full h-[calc(100%-3rem)] relative flex flex-col items-center justify-center shrink p-8 gap-4 text-center"
			>
				<div class="flex items-center gap-4 justify-evenly w-fit">
					<button
						class="btn rounded-full btn-sm md:btn-md aspect-square glass opacity-50 hover:opacity-100 transition-opacity"
						on:click={() => setShowFull(false)}
					>
						<Fa icon={faClose} size="1.25x" />
					</button>
					<h1 class="font-semibold text-lg md:text-2xl">{title}</h1>
				</div>
				<img
					{...$$restProps}
					class="max-h-full block rounded-box bg-base-300 shadow-2xl"
					{src}
					alt={$$props.alt ?? title}
					loading="lazy"
					decoding="async"
					bind:this={fullImage}
					in:scaleflyFrom={{
						duration: animationDuration,
						easing: cubicOut,
						scaleX: thumbnailSize.scaleX,
						scaleY: thumbnailSize.scaleY,
						...translationOffset
					}}
					out:scaleflyTo={{
						duration: animationDuration,
						easing: cubicIn,
						...thumbnailSize,
						...translationOffset
					}}
				/>
				{#if source}
					<a
						class="link italic opacity-50 text-xs lg:text-base"
						href={source}
						rel="external"
						target="_blank">{source}</a
					>
				{/if}
			</div>
		</div>
	{/if}

	<div class="card bg-base-100 shadow-xl text-center {$$props.class ?? ''}">
		<figure class="overflow-hidden" bind:this={figure} on:click={() => setShowFull(true)}>
			<img
				{...$$restProps}
				class="hover:scale-[102%] transition-transform cursor-pointer w-full {doneLoadingThumbnail ? '' : 'w-0 h-0'}"
				alt={$$props.alt ?? title}
				src="/thumbnail{src}"
				{title}
				on:load={() => (doneLoadingThumbnail = true)}
				on:error={() => (doneLoadingThumbnail = true)}
			/>
			{#if !doneLoadingThumbnail}
				<div class="btn no-animation loading bg-transparent border-0">Előnézet letöltése...</div>
			{/if}
		</figure>
		<div class="card-body items-center justify-evenly gap-0 p-2 sm:p-4">
			<span class="card-title text-base sm:text-lg block w-fit" on:click>{title}</span>
		</div>
	</div>
</template>
