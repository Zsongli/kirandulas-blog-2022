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
			<p>
				Amint megláttam az épületet, azonnal feltűnt, hogy a Schönbrunni kastélyra emlékeztet, amit
				korábban Bécsben láttam. Erről később megerősítést is kaptam a vezetőnktől, aki
				megemlítette, hogy éppen arról lett mintázva, ugyanis a korában nagyon "divatosnak"
				számított.
			</p>
			<p>
				Egyébként minket körülbelül egy héttel megelőzve látogatott ide a korábban említett vlogger,
				André Traveler. Mint az a videójából kiderült, a kastélynál a nem túl kedvesen fogadták,
				mint turista, amiről híres is lett a hely a magyar közösségi médián, de szerencsénkre mi ezt
				nem tapsztaltuk.
			</p>
			<p>
				A tárlatvezetés jó minőségű volt, körbevezettek minket a kastély érdekesebb részein,
				valamint nem sokkal később a múzeumban is, ahol a kastély történetéhez kapcsolódó értékesebb
				tárgyakat állították ki.
			</p>
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
				térképet, majd elengedtek minket felfedezni a helyet.
			</p>
			<p>
				Először a kőfejtőre ránéző kinti tanösvényt követtük, majd a kőfejtő feletti "kilátóból"
				távcsővel körbenézhettünk. Ezután lementünk egy lépcsőn, maga a kőfejtő belsejébe. Egyből
				lehetett érezni a hőmérséklet-különbséget. Szerencsére volt nálunk extra ruha amit
				felvehettünk.
			</p>
			<p>
				Az egyre mélyebbre vezető lépcsőről körbenézve megcsodálhattuk a hatalmas belmagasságú
				teret, ahonnan egykor mészkövet termeltek ki. A kitermelt anyagból számos épület épült
				Bécsben és Sopronban. Ma már nem használják eredeti céljára, hanem az UNESCO világörökség
				része lett. A fölénk tornyosuló hatalmas mennyiségű kő omlásveszélyes is lehetne, ezért egy
				biztonsági háló volt a teljes "mennyezetre" feltéve.
			</p>
			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/quarry/outside.jpg" title="A kőfejtő kívülről" />
				<ExpandablePicture src="/img/quarry/track.jpg" title="A tanösvényen" />
			</div>
			<p>
				Ahogyan mentük tovább a lépcsőn, láthattunk vetítéseket ősi tengeri élőlényekről is. Elérve
				a lépcső alját (mostmár tényleg hideg volt), mégtöbb tengeri állatokról tanító kiállításokat
				láthattunk. Továbbsétálva benézhettünk a Barlangszínházba, bár sajnos nem mehettünk be. Azt
				állítják, hogy nagyon jó a barlang akusztikája, sokan szeretnének itt előadni.
			</p>
			<p>
				Kicsit arrébb megnézhettünk egy interaktív kisfilmet, ami a hely és a környék történelméről
				szólt.
			</p>
			<p>
				Volt még egy magas, még a kőfejtőn belüli lelátó, ahova egy méretes lépcső vezetett fel.
			</p>
			<div class="pic-group grid-cols-3">
				<ExpandablePicture src="/img/quarry/shell.jpg" title="Ősi kagylófaj" />
				<ExpandablePicture
					src="/img/quarry/stairs.jpg"
					title="Lépcső a kőfejtőn belüli lelátóhoz"
				/>
				<ExpandablePicture src="/img/quarry/inside.jpg" title="A lelátóról" />
			</div>
			<p>
				Mikor ideje volt menni, volt egy másik lépcső, ami egyből kivezetett lentről, nem kellett
				visszamenni az idefele bejárt úton. A buszhoz visszaérve megtudtuk, hogy az eddig
				betervezett Páneurópai Piknik emlékhelyet nem fogjuk meglátogatni. (Amúgy is láthattuk az
				interaktív kisfilmben.)
			</p>
		</article>
		<article>
			<h2>Szabad séta + Tűztorony</h2>
			<span class="subtitle">Sopron</span>
			<p>
				A Sopronba való érkezésünk után nem sokkal el lettünk szabadon engedve a városban nagyjából
				két és fél órára. Ez idő alatt (hatékonyan beosztva) kellett megebédelnünk - amin elsőnek
				túl is estünk egy Mekiben - és körbejárni a környék híresebb látnivalóit, amelyekről egy
				email-ben kapott lista alapján tájékozódhattunk. Az elért helyszíneken egy-egy csoportképpel
				kellett igazolni a látogatásunkat. Sok érdekes dolgot láttunk a séta közben, köztük a
				Soproni® márkalogó felfestve egy közönséges panelház oldalára, és a Soproni Orsolyita
				Templom, ami nem volt a látogatandó állomások listáján, de annyira megakadt rajta a szemem,
				hogy fotót is készítettem róla (véletlenül sem azért, hogy kitöltse a helyet a blogon).
			</p>
			<p>
				Az összes állomás végigjárása után - amit nem feltétlenül mindenki tett meg - eljött a
				Tűztorony lépcsői megmászásának ideje. Körülbelül 200 darab csigalépcsőfokról van szó,
				amelyeknek mire a végére értünk, már kiőszültünk. Összességében megérte: gyönyörű kilátás
				fogadott, amit anno a toronyőrök is rendkívül kedvelhettek a munkájuk alatt. A tetőn
				elvoltunk egy darabig, és észrevehettünk különös dolgokat a távolban, mint például az a
				bizonyos kínai áruház. Nem sokkal később elindultunk lefelé, és egy újabb évszázadokon át
				tartó mászás után a busz felé vettük az irányt.
			</p>

			<div class="pic-group grid-cols-3">
				<ExpandablePicture src="/img/sopron/beer.jpg" title="Sör" />
				<ExpandablePicture src="/img/sopron/chruch.jpg" title="A Soproni Orsolyita Templom" />
				<ExpandablePicture src="/img/sopron/tuztorony/bottom.jpg" title="A Tűztorony alulról" />
			</div>
			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture
					src="/img/sopron/tuztorony/viewpoint-1.jpg"
					title="A város a Tűztoronyról #1"
				/>
				<ExpandablePicture
					src="/img/sopron/tuztorony/viewpoint-2.jpg"
					title="A város a Tűztoronyról #2"
				/>
			</div>
		</article>
		<article>
			<h2>Csalogány Tábor</h2>
			<span class="subtitle">Csapod</span>
			<p>A táborhely Csapodon található egy kis utca végén. Itt töltöttük el a két éjszakánkat.</p>
			<p>
				Összességében jó tapasztalatokkal távoztunk. Sőt, kiemelkedően jókkal az eddigiekhez képest.
				Az egyetlen kifogásolható tényező a szobánk mérete volt, de ezen kívül minden szükségletünk
				ki lett elégítve. A bácsi, aki fogadott minket, nagyon kedves volt.
			</p>
			<p>
				Szabadidőnkben az udvaron focizhattunk, vagy röplabdázhattunk, ugyanis mind a kettőhöz volt
				megfelelő felszerelés. A másik legnépszerűbb elfoglaltság pedig az ebédlőben való
				társasjátékozás volt.
			</p>
			<p>
				Ezen kívül még pozitív tényező a táborhely konyhája volt. Igazi, házias ízeket kaptunk,
				kiváló minőségben, és még az adagból sem sajnáltak.
			</p>
			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/csapod/dining-area.jpg" title="Az kültéri étkező" />
				<ExpandablePicture src="/img/csapod/house.jpg" title="A 2x5 személyes ház" />
			</div>
		</article>
	</ArticleContainer>
</template>
