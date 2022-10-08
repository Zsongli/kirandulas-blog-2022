<footer class="footer items-center p-4 bg-neutral text-neutral-content shrink-0">
	<div class="items-center grid-flow-col gap-5 justify-self-center text-center md:justify-self-start md:text-left">
		<slot name="left" />
	</div>

	<div class="grid-flow-col gap-4 place-self-center justify-self-center md:justify-self-end">
		<slot name="right" />
	</div>
</footer>

<style lang="postcss">
	footer :global(.link) {
		@apply hover:text-gray-500;
		transition: 200ms;
	}
</style>
