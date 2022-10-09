<script lang="ts">
	import Fa from "svelte-fa";
	import { faArrowLeft, faArrowTurnUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";

	export var title: string;
	export var date: string = "";
	export var prevHref: string | undefined = undefined;
	export var nextHref: string | undefined = undefined;
</script>

<div class="max-w-5xl mx-auto bg-base-200 flex flex-col gap-8 px-16 pt-4 pb-16">
	<div class="absolute top-0 invisible" id="top" />

	<section class="leading-7">
		<div class="flex flex-col w-11/12 m-auto justify-around">
			<h1 class="uppercase font-bold text-4xl md:text-5xl text-center p-8">{title}</h1>
			<div class="description-container">
				<slot name="description" />
			</div>
		</div>
		<div class="divider">{date}</div>
		<slot />
	</section>

	<div class="divider" />

	<div class="flex items-center justify-around gap-4 flex-wrap">
		{#if prevHref}
			<a href={prevHref} class="btn btn-primary gap-4 w-40">
				<Fa icon={faArrowLeft} size="1.5x" />
				Előző
			</a>
		{/if}
		<a href="#top" class="btn btn-secondary gap-4 w-48">
			Vissza az elejére
			<Fa icon={faArrowTurnUp} size="1.5x" />
		</a>
		{#if nextHref}
			<a href={nextHref} class="btn btn-primary gap-4 w-40">
				Következő
				<Fa icon={faArrowRight} size="1.5x" />
			</a>
		{/if}
	</div>
</div>

<style lang="postcss">
	.description-container > :global(p) {
		@apply md:text-lg italic text-center p-4;
	}

	section :global(article) :global(h2) {
		@apply text-2xl uppercase font-bold mb-4;
	}

	section :global(article) :global(h3) {
		@apply text-xl uppercase font-bold mb-3;
	}

	section :global(article) :global(h4) {
		@apply text-lg uppercase font-bold mb-2;
	}

	section :global(article) :global(h5) {
		@apply text-base uppercase font-bold mb-1;
	}

	section :global(article) :global(span.subtitle) {
		@apply text-base block italic -mt-2;
	}

	section :global(article) :global(p) {
		@apply mt-6;
	}
</style>
