<script>
	import ExpandablePicture from "$lib/components/ExpandablePicture.svelte";
	import ArticleContainer from "$lib/components/ArticleContainer.svelte";
</script>

<svelte:head>
	<title>Kirándulás Blog 2022 - 1. nap</title>
</svelte:head>

<ArticleContainer title="Az első nap" date="2022. 09. 07" nextHref="/nap2">
	<p slot="description">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequuntur amet ducimus nam
		nostrum eveniet alias neque, eum cupiditate fugiat minus doloribus fuga cumque ipsam facere
		eligendi deserunt veniam iste reprehenderit laudantium magni? Quia deserunt cumque fugit vitae
		ipsam eum ducimus tempore sapiente et, soluta ullam ipsa, consectetur veritatis molestiae!
	</p>

	<article>
		<h2>Rádiómúzeum</h2>
		<span class="subtitle">Tardos</span>
		<p>
			Az osztállyal az iskola előtt gyülekeztünk és 8:00 után már indultunk is Tardos felé, az első
			megállónkhoz. Ide egy rádiómúzeumot mentünk meglátogatni. A múzeum egy teljesen hétköznapi
			házban volt található, de belülről egyértelmű volt a különbség: a falak mentén végig mindenhol
			rádiók álltak. Pontosabban 131 darab működőképes rádióról van szó, amik a rádiózás első 50
			évének történelmét és a technológia fejlődését mutatják be. Tárlatvezetőnk Tarnóczy András
			volt, akinek az otthonában álltunk éppen. Már gyerekkorában beleszeretett a rádiózásba, már
			fiatalon is készített saját rádiókat. 1991 óta gyűjti a rádiókat, melyeket emberek
			adományoztak neki, így alakult ki ez a ma hatalmas gyűjtemény. Igaz, hogy Tardoson található,
			de 6 éve már a tatai Kuny Domokos Múzeumhoz tartozik, akik megvették Andrástól a gyűjteményt.
			Azonban megkérték, hogy ameddig még szeretné, ő fogadja a látogatókat. A látogatásunk során
			lehetőségünk volt meghallgatni többek között a legöregebb modell hangzását az abban a korban
			jellemző zeneélménnyel kombinálva. (Elég hangulatos volt)
		</p>
		<ExpandablePicture class="my-4" src="/img/radio1.webp" title = "Rádiók" />
	</article>
	
	<article>
		<h2>Kuny Domokos Múzeum / Tatai vár</h2>
		<span class="subtitle">Tata</span>
		<p>
			Következő megállónk Tata volt, itt meglátogattuk a Tatai várat. A vár körül egy várárok
			található, ami a vár mögötti Öreg-tóval kapcsolódik össze. A víz magassága nem volt túl nagy,
			láthattuk egy kisebb éttermet a várárok száraz részén. A várkaput egy kőhídon átsétálva
			közelíthettük meg. A falakon belülre lépve észrevehettünk a várból megmaradt egyetlen
			szárnyat. Itt találhatóak az először 1974-ben megnyílt Kuny Domokos Múzeum kiállításai is,
			valójában ide jöttünk, a tárlatvezetésre.
		</p>
		<p>
			A vár a 14. század végefelé épülthetett a Lackfiak által. A vár ezután Luxemburgi Zsigmond
			király tulajdonába került, aki gyakran jött ide időt tölteni. Kiegészítette az eredeti L alakú
			várat U alakúra 4 saroktoronnyal.
		</p>
		<div class="my-6 grid grid-cols-2 gap-4">
			<ExpandablePicture src="/img/tataivar1.webp" title="Tatai vár az Öreg-tó felől" source="https://commons.wikimedia.org/wiki/File:Tatai_vár-_az_Öreg_tó_felől.JPG" />
			<ExpandablePicture src="/img/tataivar2.webp" title="Séta a hídon" />
			<ExpandablePicture src="/img/tataivar3.webp" title="Séta a vár felé" />
			<ExpandablePicture src="/img/tataivar4.webp" title="Makett a vár jelenlegi állapotáról" />
			<ExpandablePicture src="/img/tataivar5.webp" title="Romok" />
			<ExpandablePicture src="/img/tataivar6.webp" title="A várárokban étkezde üzemel" />
		</div>

		<div class="grid grid-cols-3 gap-4 my-6">
			<ExpandablePicture src="/img/tataivar7.webp" title="Sírkő" />
			<ExpandablePicture src="/img/tataivar8.webp" title="Mátyás-szobor" />
			<ExpandablePicture
				src="/img/tataivar9.webp"
				title="Szobrot fotozó fotóst fotozó fotóst fotózó fotósról fotó"
			/>
		</div>
	</article>
	<article>
		<h2>Biofarm / Tehenészet</h2>
		<span class="subtitle">Nagyszentjános</span>
		<p>
			Következő állomásunk a nagyszentjánosi Kisalföldi zrt. tehenészete volt. Itt kb. 1100 tejelő
			tehén volt található, akinek élete szinte teljesen automatizálva lett gépek által. Amikor
			megérkeztünk hirtelen mindenkit megcsapott az erős silószag. Bevallom, rosszabbra számítottam,
			de viszonylag tiszta volt az összes járda. A tehenek több nagy felülről fedett épületben
			voltak, több is a fejét kidugva evett a kirakott silóból. A "tárlatvezetőnk" körbevezetett
			minket és megmutatta az automata fejőgépet. A látogatásunk végén még meg is etettek minket
			bőségesen péksüteményekkel.
		</p>
		<ExpandablePicture class="my-4" src="/img/teheneszet1.webp" title="new List<Tehén>()" />
	</article>
	<article>
		<h2>Bencés apátság</h2>
		<span class="subtitle">Pannonhalma</span>
		<p>
			A Pannonhalmi Főapátság volt következő megállónk. A monostor egy domb tetején állt, ahonnal el
			lehetett látni egészen Győrig. A monostor több nagy épületből álló épületkomplexum, többek
			között található volt itt bencés iskola és egy bazilika is. Az utóbbi, a Szent Márton-bazilika
			volt a fő látványosság, amely 55 méteres magasságával tornyosült felénk. Fontos jelképe az
			fehér ónixkő, amely megtalálható volt a rózsaablakban is. Az oldalsó bejáraton kilépve
			betekinthettünk a kerengőbe, az udvart körülölelő folyosóba. Itt tudtak gyorsan közlekedni a
			szerzetesek a fontosabb helyek között. Hátrafordulva megtekinthettük a Porta Speciosa-t, a
			kaput amin éppen kiléptünk. Ezután átmentünk a könyvtárba, ahol több, mint 400 ezer kötet volt
			található (Persze nem volt mind kirakva). Több szobron, a domborműveken és a freskókon kívül a
			hatalmas teremben középen egy nagy földgömböt is láthattunk.
		</p>
		<p>
			Az apátság tulajdonában áll többhektárnyi termőföld is, amin még máig is gazdálkodnak, szőlőt
			és gyógynövényeket termesztenek.
		</p>
		<div class="grid grid-cols-3 gap-4 my-6">
			<ExpandablePicture src="/img/pannonhalma1.webp" title="A bazilika kívülről" />
			<ExpandablePicture src="/img/pannonhalma2.webp" title="A bazilika belülről" />
			<ExpandablePicture
				src="/img/pannonhalma3.webp"
				title="Az altemplom"
			/>
		</div>
		<ExpandablePicture class="mx-auto my-6" src="/img/pannonhalma4.webp" title="A Porta Speciosa" />

		<div class="grid grid-cols-3 gap-4 my-6">
			<ExpandablePicture src="/img/pannonhalma5.webp" title="I. Ferenc magyar király szobra" />
			<ExpandablePicture src="/img/pannonhalma6.webp" title="Egy a sok teli könyvespolc közül" />
		</div>
		<ExpandablePicture src="/img/pannonhalma7.webp" title="A könyvtár" />
	</article>
</ArticleContainer>
