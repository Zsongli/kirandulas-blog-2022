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
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum exercitationem aperiam tempore
			in dolorem sint possimus, quibusdam cupiditate, deserunt unde, modi sunt minima! Maiores eius
			enim suscipit quaerat? Nisi facilis sunt modi debitis vitae asperiores necessitatibus
			molestiae ad similique ea culpa autem, commodi earum ipsam quisquam doloribus corrupti
			dignissimos?
		</p>
		<article>
			<h2>Lorem Ipsum</h2>
			<span class="subtitle">Dolor sit amet</span>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime similique rerum
				molestiae tempora in aperiam ratione temporibus ab corrupti voluptates nemo modi
				consequuntur, enim magnam quis eligendi exercitationem. Maiores aut explicabo, animi
				mollitia adipisci eligendi temporibus voluptatum atque ex fugiat vel nostrum fugit amet
				earum rerum iste tenetur odio sint architecto, ea error tempore at labore! Tempore
				asperiores ipsa illo? Nam repellendus, reprehenderit enim iure eum, dolorem aliquid
				quibusdam impedit vero, explicabo nemo eius ipsam nostrum molestias accusantium voluptatem
				blanditiis fuga libero excepturi optio! Praesentium soluta nihil, delectus earum ut, sunt
				labore tempore nostrum odio eaque corporis totam perferendis repudiandae dolorem dicta
				tempora maxime saepe nam, minus et exercitationem non. Dolores iusto beatae asperiores
				sapiente quae aspernatur temporibus eos nam dolorum necessitatibus alias nulla magni dolorem
				eaque cupiditate dicta facere itaque, eligendi accusamus! Facilis, accusamus soluta vitae
				adipisci repudiandae totam deserunt qui aperiam corporis neque illo minima consequuntur
				cupiditate ipsum laudantium quas.
			</p>
		</article>
	</ArticleContainer>
</template>
