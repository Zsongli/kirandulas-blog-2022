<script>
	import CustomImage from "$lib/components/CustomImage.svelte";
	import Fa from "svelte-fa";
	import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
	<div class="max-w-5xl mx-auto bg-base-200" id="top">
		<div class="max-w-4xl mx-auto flex flex-col gap-8 p-4">
			<h1 class="text-2xl">Az első nap</h1>
			<article>
				<h2 class="text-xl mb-2">Tardos - Rádiómúzeum</h2>
				<p>
					Az osztállyal az iskola előtt gyülekeztünk és 8:00 után már indultunk is Tardos felé, az
					első megállónkhoz. Ide egy rádiómúzeumot mentünk meglátogatni. A múzeum egy teljesen
					hétköznapi házban volt található, de belülről egyértelmű volt a különbség: a falak mentén
					végig mindenhol rádiók álltak. Pontosabban 131 darab működőképes rádióról van szó, amik a
					rádiózás első 50 évének történelmét és a technológia fejlődését mutatják be.
					Tárlatvezetőnk Tarnóczy András volt, akinek az otthonában álltunk éppen. Már gyerekkorában
					beleszeretett a rádiózásba, már fiatalon is készített saját rádiókat. 1991 óta gyűjti a
					rádiókat, melyeket emberek adományoztak neki, így alakult ki ez a ma hatalmas gyűjtemény.
					Igaz, hogy Tardoson található, de 6 éve már a tatai Kuny Domokos Múzeumhoz tartozik, akik
					megvették Andrástól a gyűjteményt. Azonban megkérték, hogy ameddig még szeretné, ő fogadja
					a látogatókat. A látogatásunk során lehetőségünk volt meghallgatni többek között a
					legöregebb modell hangzását az abban a korban jellemző zeneélménnyel kombinálva. (Elég
					hangulatos volt)
				</p>
				<img class="mx-auto my-6 w-2/3" src="/img/radio1.webp" alt="Rádiók" title="Rádiók" />
			</article>
			<article>
				<h2 class="text-xl mb-2">Tata - Kuny Domokos Múzeum / Tatai vár</h2>
				<p>
					Következő megállónk Tata volt, itt meglátogattuk a Tatai várat. A vár körül egy várárok
					található, ami a vár mögötti Öreg-tóval kapcsolódik össze. A víz magassága nem volt túl
					nagy, láthattuk egy kisebb éttermet a várárok száraz részén. A várkaput egy kőhídon
					átsétálva közelíthettük meg. A falakon belülre lépve észrevehettünk a várból megmaradt
					egyetlen szárnyat. Itt találhatóak az először 1974-ben megnyílt Kuny Domokos Múzeum
					kiállításai is, valójában ide jöttünk, a tárlatvezetésre.
				</p>
				<p>
					A vár a 14. század végefelé épülthetett a Lackfiak által. A vár ezután Luxemburgi Zsigmond
					király tulajdonába került, aki gyakran jött ide időt tölteni. Kiegészítette az eredeti L
					alakú várat U alakúra 4 saroktoronnyal.
				</p>
				<CustomImage
					class="mx-auto my-6 w-4/5"
					src="/img/tataivar1.webp"
					desc="Tatai vár az Öreg-tó felől"
				/>
				<CustomImage class="mx-auto my-6 w-4/5" src="/img/tataivar2.webp" desc="Séta a hídon" />
				<CustomImage class="mx-auto my-6 w-4/5" src="/img/tataivar3.webp" desc="Séta a vár felé" />
			</article>
			<article>
				<h2 class="text-xl mb-2">Nagyszentjános - Biofarm / Tehenészet</h2>
				<p>
					Következő állomásunk a nagyszentjánosi Kisalföldi zrt. tehenészete volt. Itt kb. 1100
					tejelő tehén volt található, akinek élete szinte teljesen automatizálva lett gépek által.
					Amikor megérkeztünk hirtelen mindenkit megcsapott az erős silószag. Bevallom, rosszabbra
					számítottam, de viszonylag tiszta volt az összes járda. A tehenek több nagy felülről
					fedett épületben voltak, több is a fejét kidugva evett a kirakott silóból. A
					"tárlatvezetőnk" körbevezetett minket és megmutatta az automata fejőgépet. A látogatásunk
					végén még meg is etettek minket bőségesen péksüteményekkel.
				</p>
			</article>
			<div>
				<a href="#top" class="btn btn-primary gap-4">
					Vissza az elejére
					<Fa icon={faArrowTurnUp} size="1.5x" />
				</a>
			</div>
		</div>
	</div>
</template>

<svelte:head>
	<title>Kirándulás - 1. Nap</title>
</svelte:head>