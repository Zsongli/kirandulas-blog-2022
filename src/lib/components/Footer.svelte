<footer class="footer gap-0 items-center p-4 bg-neutral text-neutral-content shrink-0">
	<div class="items-center grid-flow-col gap-5 justify-self-center text-center text-sm md:justify-self-start md:text-left md:text-base">
		<slot name="start" />
	</div>
	<div class="divider w-full gap-0 md:hidden before:content-none"/>
	<div class="grid-flow-col gap-4 place-self-center justify-self-center md:justify-self-end">
		<slot name="end" />
	</div>
</footer>

<style lang="postcss">
	footer :global(.link) {
		@apply hover:text-gray-500;
		transition: 200ms;
	}
</style>
