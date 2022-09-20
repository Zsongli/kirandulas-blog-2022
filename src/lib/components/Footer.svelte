<script lang="ts">
	import Fa from "svelte-fa";
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
	import { svelteIcon, szlgIcon } from "$lib/customIcons";
</script>

<footer class="footer items-center p-4 bg-neutral text-neutral-content shrink-0">
	<div class="items-center grid-flow-col gap-5">
		<a href="/" class="link">
			<Fa icon={faGlobeEurope} size="3x" />
		</a>
		<div class="flex flex-col">
			<span class="font-semibold capitalize">2022 - SZENT LÁSZLÓ GIMNÁZIUM, BUDAPEST</span>
			<span class="opacity-25 italic text-xs"
				>A weboldalt készítette Makai Tamás és Mélykuti Ádám</span
			>
		</div>
	</div>

	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<a rel="external" target="blank" href="http://szlgbp.hu" class="link">
			<Fa icon={szlgIcon} size="2x" />
		</a>
		<a
			rel="external"
			target="blank"
			href="https://github.com/Zsongli/kirandulas-blog-2022"
			class="link"
		>
			<Fa icon={faGithub} size="2x" />
		</a>
		<a rel="external" target="blank" href="https://kit.svelte.dev" class="link">
			<Fa icon={svelteIcon} size="2x" />
		</a>
	</div>
</footer>

<style lang="postcss">
	footer .link {
		@apply hover:text-gray-500;
		transition: 200ms;
	}
</style>
