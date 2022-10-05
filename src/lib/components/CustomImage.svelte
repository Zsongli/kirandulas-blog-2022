<script lang="ts">
	export let src: string;
	export let desc: string;
    // any way to tell sveltekit, that this is a tailwind string?
	export let clazz: string;
</script>

<img class={clazz} {src} alt={desc} title={desc} />
