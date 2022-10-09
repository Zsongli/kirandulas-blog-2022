<script lang="ts">
	import Fa from "svelte-fa";
	import { menuIcon } from "$lib/customIcons";
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

	export var title: string;
	export var icon: IconDefinition;
</script>

<template>
	<nav class="navbar grid grid-flow-col bg-base-100 rounded-2xl shadow-md">
		<div class="gap-2 place-self-start">
			<div class="dropdown h-full lg:hidden">
				<div tabindex="0" class="btn btn-ghost h-full">
					<Fa icon={menuIcon} />
				</div>

				<div
					class="dropdown-content w-max bg-base-100 p-3 rounded-box shadow-lg border border-base-content border-opacity-10"
				>
					<slot name="center" />
				</div>
			</div>

			<a class="hidden lg:flex btn btn-ghost normal-case text-xl gap-3" href="/">
				<Fa {icon} />
				{title}
			</a>

			<slot name="start" />
		</div>

		<a class="lg:hidden flex btn btn-ghost normal-case text-2xl gap-3" href="/">
			<Fa {icon} size="1.2x" />
			{title}
		</a>

		<div class="hidden lg:flex place-self-center">
			<slot name="center" />
		</div>

		<div class="place-self-end">
			<slot name="end" />
		</div>
	</nav>
</template>

<style lang="postcss">
	nav {
		grid-template-columns: 1fr 2fr 1fr;
	}

	nav :global(ul.menu) > :global(li) > :global(a) {
		border-radius: var(--rounded-btn);
	}

	nav .dropdown-content :global(ul) {
		@apply flex-col;
	}

	nav .dropdown-content :global(ul) > :global(li) > :global(a) {
		@apply w-full justify-center;
	}
</style>
