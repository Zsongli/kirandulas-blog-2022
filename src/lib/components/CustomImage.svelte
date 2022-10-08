<script lang="ts">
	export let desc: string;
</script>

<img {...$$restProps} alt={$$props.alt ?? desc} title={$$props.title ?? desc} />
