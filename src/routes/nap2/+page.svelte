<script>
	import ExpandablePicture from "$lib/components/ExpandablePicture.svelte";
	import ArticleContainer from "$lib/components/ArticleContainer.svelte";
</script>

<svelte:head>
	<title>Kirándulás Blog 2022 - 2. nap</title>
</svelte:head>

<template>
	<ArticleContainer title="A második nap" date="2022. 09. 08" prevHref="/nap1" nextHref="/nap3">
		<p slot="description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequuntur amet ducimus nam
			nostrum eveniet alias neque, eum cupiditate fugiat minus doloribus fuga cumque ipsam facere
			eligendi deserunt veniam iste reprehenderit laudantium magni? Quia deserunt cumque fugit vitae
			ipsam eum ducimus tempore sapiente et, soluta ullam ipsa, consectetur veritatis molestiae!
		</p>
	</ArticleContainer>
</template>
