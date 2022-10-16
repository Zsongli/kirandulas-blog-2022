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
			A második nap éppen hogy pár óra alvással indult, mivel késő estig társasjátékok folytak az
			ebédlőben. Ennek ellenére késés nélkül sikeresen meglátogattuk Fertődöt, ami az
			Eszterházy-kastélyról híres, vagy <a
				class="link"
				rel="external"
				target="_blank"
				href="https://www.youtube.com/watch?v=v8sR7yy7w9c">André Traveler</a
			>ről, attól függően, hogy éppen kit kérdezünk. Voltunk emellett még Fertőrákoson egy
			kőfejtőben, valamint körbejártuk Sopron városát is.
		</p>
		<article>
			<h2>Esterházy-kastély</h2>
			<span class="subtitle">Fertőd</span>
			<p>Epikus nagy fancy ház.</p>

			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/fertod/entrance.jpg" title="A díszes kapu" />
				<ExpandablePicture src="/img/fertod/front.jpg" title="A kastély szemből" />
				<ExpandablePicture src="/img/fertod/garden.jpg" title="A belső kert" />
				<ExpandablePicture src="/img/fertod/backyard.jpg" title="A kastély hátsó kertje" />
			</div>
		</article>
		<article>
			<h2>Kőfejtő</h2>
			<span class="subtitle">Fetőrákos</span>
			<p>
				A következő helyszín a Fertőrákosi Kőfejtő és Barlangszínház volt. A bejáratnál kaptunk egy
				térképet, majd elengedtek minket felfedezni a helyet. Először a kőfejtőre ránéző kinti
				tanosvényt követtük, majd a kőfejtő feletti "kilátóból" távcsővel körbenézhettünk. Ezután
				lementünk egy lépcsőn magába a kőfejtő belsejébe. Egyből lehetett érezni a
				hőmérséklet-különbséget. Szerencsére volt nálunk extra ruha amit felvehettünk. Az egyre
				mélyebbre vezető lépcsőről körbenézve megcsodálhattuk a hatalmas belmagasságú teret, ahonnan
				egykor mészkövet termeltek ki. A kitermelt anyagból számos épület épült Bécsben és
				Sopronban. Ma már nem használják eredeti céljára, az UNESCO világörökség része lett. A
				fölénk tornyosuló hatalmas mennyiségű kő omlásveszélyes is lehetne, ezért egy biztonsági
				háló volt a teljes "mennyezetre" feltéve. Ahogyan mentük tovább a lépcsőn láthattunk
				vetítéseket ősi tengeri élőlényekről is. Elérve a lépcső alját, (mostmár tényleg hideg
				volt), mégtöbb tengeri állatokról tanító kiállításokat láthattunk. Továbbsétálva
				benézhettünk a Barlangszínházba, ahova sajnos nem mehettünk be. Azt állítják, hogy nagyon jó
				a barlang akkusztikája, sokan szeretnének itt előadni. Kicsit arrébb megnézhettünk egy
				interaktív kisfilmet, ami a hely és a környék történelméről szólt. Volt még egy magas, még a
				kőfejtőn belüli lelátó, ahova egy méretes lépcső vezetett fel. Mikor ideje volt menni, volt
				egy másik lépcső, ami egyből kivezetett lentről, nem kellett visszamenni az idefele bejárt
				úton. A buszhoz visszaérve megtudtuk, hogy az eddig betervezett Páneurópai Piknik
				emlékhelyet nem fogjuk meglátogatni. (Amúgy is láthattuk az interaktív kisfilmben.)
			</p>

			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/quarry/outside.jpg" title="A kőfejtő kívülről" />
				<ExpandablePicture src="/img/quarry/track.jpg" title="A tanösvényen" />
			</div>
			<div class="pic-group grid-cols-3">
				<ExpandablePicture src="/img/quarry/shell.jpg" title="Ősi kagylófaj" />
				<ExpandablePicture
					src="/img/quarry/stairs.jpg"
					title="Lépcső a kőfejtőn belüli lelátóhoz"
				/>
				<ExpandablePicture src="/img/quarry/inside.jpg" title="A lelátóról" />
			</div>
		</article>
		<article>
			<h2>Szabad séta + Tűztorony</h2>
			<span class="subtitle">Sopron</span>
			<p>
				Mekivel kezdtük, majd a Tanár Úr által kiküldött helyszíneket látogattuk meg sorban. A
				helyszíneken csoportképeket kellett készíteni. Ezután felmentünk a Tűztorony kilátójába.
			</p>

			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/sopron/viewpoint.jpg" title="A város a Tűztoronyról" />
			</div>
		</article>
		<article>
			<h2>Csalogány Tábor</h2>
			<span class="subtitle">Csapod</span>
			<p>A táborhely</p>

			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/csapod/dining-area.jpg" title="Az kültéri étkező" />
				<ExpandablePicture src="/img/csapod/house.jpg" title="A 2x5 személyes ház" />
			</div>
		</article>
	</ArticleContainer>
</template>
