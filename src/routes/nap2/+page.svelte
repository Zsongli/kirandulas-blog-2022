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
			<h2>Esterházy-kastély</h2>
			<span class="subtitle">Fertőd</span>
			<p>Epikus nagy fancy ház.</p>

			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/fertod-enterance.jpg" title="A díszes kapu" />
				<ExpandablePicture src="/img/fertod-front.jpg" title="A kastély szemből" />
				<ExpandablePicture src="/img/fertod-garden.jpg" title="A belső kert" />
				<ExpandablePicture src="/img/fertod-backyard.jpg" title="A kastély hátsó kertje" />
			</div>
		</article>
		<article>
			<h2>Kőfejtő</h2>
			<span class="subtitle">Fetőrákos</span>
			<p>Átlagos Májkraft játékos.</p>

			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/mines-outside.jpg" title="A kőfejtő kívülről" />
				<ExpandablePicture src="/img/mines-track.jpg" title="A tanösvényen" />
			</div>
			<div class="pic-group grid-cols-3">
				<ExpandablePicture src="/img/mines-shell.jpg" title="Ősi kagylófaj" />
				<ExpandablePicture src="/img/mines-stairs.jpg" title="Lépcső a barlangon belüli lelátóhoz" />
				<ExpandablePicture src="/img/mines-inside.jpg" title="A lelátóról" />
			</div>
		</article>
		<article>
			<h2>Szabad séta + Tűztorony</h2>
			<span class="subtitle">Sopron</span>
			<p>
				Mekivel kezdtük, majd a Krajnyák tanárúr által kiküldött helyszíneket látogattuk meg sorban.
				A helyszíneken csoportképeket kellett készíteni. Ezután felmentünk a Tűztorony kilátójába.
			</p>

			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/sopron-viewpoint.jpg" title="A város a Tűztoronyról" />
			</div>
		</article>
		<article>
			<h2>Csalogány Tábor</h2>
			<span class="subtitle">Csapod</span>
			<p>A táborhely</p>

			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/csapod-dining-area.jpg" title="Az kültéri étkező" />
				<ExpandablePicture src="/img/csapod-house.jpg" title="A 2x5 személyes ház" />
			</div>
		</article>
	</ArticleContainer>
</template>
