<script>
	import ExpandablePicture from "$lib/components/ExpandablePicture.svelte";
	import ArticleContainer from "$lib/components/ArticleContainer.svelte";
</script>

<svelte:head>
	<title>Kirándulás Blog 2022 - 1. nap</title>
</svelte:head>

<template>
	<ArticleContainer title="Az első nap" date="2022. 09. 07" nextHref="/nap2">
		<p slot="description">
			A kirándulás első napján Kőbányáról először Tardosra indultunk, majd emellett olyan helyeket
			fedeztünk fel, mint a Tatai vár, az Öreg-tó, egy Tehenészet Nagyszentjánoson, valamint a
			Pannonhalmi Főapátság. A busz ugyan csak pár perc késéssel tudott csak indulni, de ez nem
			jelentett problémát. Minden állomáson el tudtuk tölteni a maximális időt.
		</p>

		<article>
			<h2>Rádiómúzeum</h2>
			<span class="subtitle">Tardos</span>
			<p>
				Az osztállyal az iskola előtt gyülekeztünk és 8:00 után már indultunk is Tardos felé, az
				első megállónkhoz. Ide egy rádiómúzeumot mentünk meglátogatni.
			</p>
			<p>
				A múzeum egy teljesen hétköznapi házban volt található, de belülről egyértelmű volt a
				különbség: a falak mentén végig mindenhol rádiók álltak. Pontosabban 131 darab működőképes
				rádióról van szó, amik a rádiózás első 50 évének történelmét és a technológia fejlődését
				mutatják be.
			</p>
			<p>
				Tárlatvezetőnk Tarnóczy András volt, akinek az otthonában álltunk éppen. Már gyerekkorában
				beleszeretett a rádiózásba, már fiatalon is készített saját rádiókat. 1991 óta gyűjti a
				rádiókat, melyeket emberek adományoztak neki, így alakult ki ez a ma hatalmas gyűjtemény.
			</p>
			<p>
				Igaz, hogy Tardoson található, de 6 éve már a tatai Kuny Domokos Múzeumhoz tartozik, akik
				megvették Andrástól a gyűjteményt. Azonban ő megkérte őket, hogy ameddig még lehetséges, ő
				fogadhassa a látogatókat.
			</p>
			<p>
				A látogatásunk során lehetőségünk volt meghallgatni többek között a legöregebb modell
				hangzását az abban a korban jellemző zeneélménnyel kombinálva. (Elég hangulatos volt)
			</p>
			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/radio/wall.jpg" title="Rádiók" />
				<ExpandablePicture src="/img/radio/listen.jpg" title="Egy kis zenehallgatás" />
			</div>
		</article>

		<article>
			<h2>Kuny Domokos Múzeum / Tatai vár</h2>
			<span class="subtitle">Tata</span>
			<p>
				Következő megállónk Tata volt, itt meglátogattuk a Tatai várat. A vár körül egy várárok
				található, ami a vár mögötti Öreg-tóval kapcsolódik össze. A víz magassága nem volt túl
				nagy, láthattunk egy kisebb éttermet a várárok száraz részén.
			</p>
			<p>
				A várkaput egy kőhídon átsétálva közelíthettük meg. A falakon belülre lépve észrevehettünk a
				várból megmaradt egyetlen szárnyat. Itt találhatóak az először 1974-ben megnyílt Kuny
				Domokos Múzeum kiállításai is, valójában ide jöttünk, a tárlatvezetésre.
			</p>
			<p>A tárlatvezetés után meglátogattuk az Öreg-tavat is.</p>
			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture
					src="/img/tataivar/lakeside.jpg"
					title="Tatai vár az Öreg-tó felől"
					source="https://commons.wikimedia.org/wiki/File:Tatai_vár-_az_Öreg_tó_felől.JPG"
				/>
				<ExpandablePicture src="/img/tataivar/bridge.jpg" title="Séta a hídon" />
				<ExpandablePicture src="/img/tataivar/front.jpg" title="Séta a vár felé" />
				<ExpandablePicture src="/img/tataivar/makett.jpg" title="Makett a várról" />
				<ExpandablePicture src="/img/tataivar/ruins.jpg" title="Romok" />
				<ExpandablePicture src="/img/tataivar/moat-cafe.jpg" title="A várárokban étkezde üzemel" />
			</div>

			<div class="pic-group grid-cols-3">
				<ExpandablePicture src="/img/tataivar/gravestone.jpg" title="Sírkő" />
				<ExpandablePicture src="/img/tataivar/matyi.jpg" title="Mátyás-szobor" />
				<ExpandablePicture
					src="/img/tataivar/nesting.jpg"
					title="Szobrot fotozó fotóst fotozó fotóst fotózó fotósról fotó"
				/>
			</div>
		</article>
		<article>
			<h2>Biofarm / Tehenészet</h2>
			<span class="subtitle">Nagyszentjános</span>
			<p>
				Következő állomásunk a nagyszentjánosi Kisalföldi Zrt. tehenészete volt. Itt kb. 1100 tejelő
				tehén volt található, akinek élete szinte teljesen automatizálva lett gépek által.
			</p>
			<p>
				Amikor megérkeztünk hirtelen mindenkit megcsapott az erős silószag. Bevallom, rosszabbra
				számítottam, de viszonylag tiszta volt az összes járda.
			</p>
			<p>
				A tehenek több nagy felülről fedett épületben voltak, több is a fejét kidugva evett a
				kirakott silóból. A "tárlatvezetőnk" körbevezetett minket és megmutatta az automata
				fejőgépet.
			</p>
			<p>A látogatásunk végén még meg is etettek minket bőségesen péksüteményekkel.</p>
			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/teheneszet/inside.jpg" title="new List<Tehén>()" />
				<ExpandablePicture src="/img/teheneszet/ad.jpg" title="A hely üzemeltetői" />
			</div>
		</article>
		<article>
			<h2>Bencés apátság</h2>
			<span class="subtitle">Pannonhalma</span>
			<p>
				A Pannonhalmi Főapátság volt következő megállónk. A monostor egy domb tetején állt, ahonnal
				el lehetett látni egészen Győrig. A monostor több nagy épületből álló épületkomplexum,
				többek között található volt itt bencés iskola és egy bazilika is.
			</p>
			<p>
				Az utóbbi, a Szent Márton-bazilika volt a fő látványosság, amely 55 méteres magasságával
				tornyosult felénk. Fontos jelképe az fehér ónixkő, amely megtalálható volt a rózsaablakban
				is. Lenézünk az altemplomba is, itt volt elhelyezve Habsburg Ottó szívurnája is.
			</p>
			<div class="pic-group grid-cols-3">
				<ExpandablePicture src="/img/pannonhalma/b-outside.jpg" title="A bazilika kívülről" />
				<ExpandablePicture src="/img/pannonhalma/b-inside.jpg" title="A bazilika belülről" />
				<ExpandablePicture src="/img/pannonhalma/b-lower.jpg" title="Az altemplom" />
			</div>
			<p>
				Ezután a templom oldalsó bejáratán kilépve betekinthettünk a kerengőbe, az udvart körülölelő
				folyosóba. Itt tudtak gyorsan közlekedni a szerzetesek a fontosabb helyek között.
				Hátrafordulva megtekinthettük a Porta Speciosa-t, a kaput amin éppen kiléptünk.
			</p>
			<p>
				Ezután átmentünk a könyvtárba, ahol több, mint 400 ezer kötet volt található (Persze nem
				volt mind kirakva). Több szobron, a domborműveken és a freskókon kívül a hatalmas teremben
				középen egy nagy földgömböt is láthattunk.
			</p>
			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/pannonhalma/fancy-door.jpg" title="A Porta Speciosa" />
				<ExpandablePicture src="/img/pannonhalma/lib-whole.jpg" title="A könyvtár" />
			</div>
			<div class="pic-group grid-cols-3">
				<ExpandablePicture
					src="/img/pannonhalma/lib-feri.jpg"
					title="I. Ferenc magyar király szobra"
				/>
				<ExpandablePicture
					src="/img/pannonhalma/lib-shelf.jpg"
					title="Egy a sok teli könyvespolc közül"
				/>
				<ExpandablePicture
					src="/img/pannonhalma/lib-ceiling.jpg"
					title="A plafonon található freskó"
				/>
			</div>
			<p>
				Az apátság tulajdonában áll több hektárnyi termőföld is, amin még máig is gazdálkodnak,
				szőlőt és gyógynövényeket termesztenek.
			</p>
		</article>
	</ArticleContainer>
</template>
