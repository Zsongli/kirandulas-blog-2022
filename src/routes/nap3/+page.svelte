<script lang="ts">
	import ExpandablePicture from "$lib/components/ExpandablePicture.svelte";
	import ArticleContainer from "$lib/components/ArticleContainer.svelte";

	let audio1: HTMLAudioElement;
	let audio2: HTMLAudioElement;
	let dead = false;
	let playing = false;

	function funny() {
		if (playing) return;
		playing = true;
		dead = !dead;
		(dead ? audio1 : audio2).play();
	}
</script>

<svelte:head>
	<title>Kirándulás Blog 2022 - 3. nap</title>
</svelte:head>

<template>
	<ArticleContainer title="A harmadik nap" date="2022. 09. 09" prevHref="/nap2">
		<p slot="description">
			Az utolsó nap a Jurisics-vár és Szombathely központjának körbejárásáról szólt. Szombathely
			meglátogatása után már lényegében indultunk vissza Kőbányára, csak közben még beugrottunk
			Győrbe, ahol megtekintettük iskolánk védőszentje, I. László hermáját, valamint körbesasoltuk a
			várost a Püspökvár-Toronykilátóról. Ezután következett az élménydús buszút az iskola felé,
			legalábbis azoknak, akik nem csak zenét hallgatva aludták azt végig.
		</p>
		<article>
			<h2>Jurisics-vár</h2>
			<span class="subtitle">Kőszeg</span>
			<p>
				A harmadik és egyben utolsó napon gyors összepakolás után útnak indultunk a nap első
				megállójához, Kőszeghez. Itt a Jurisics-várat látogattuk meg, és még tervben volt egy szabad
				séta is, de végül azt inkább a következő helyre hagytuk.
			</p>
			<p>
				A vár kapuján belépve elénk tárult az udvar, ami most le volt zárva mert egy színpad fel
				volt állítva. Volt itt egy szuvenír bolt is, sokan egyből elkezdtek kardozni a kirakott <!-- (?) -->
				játékfegyverekkel.
			</p>
			<p>
				Ezután bemehettünk a valódi kiállítás részre, de még mielőtt elengedtek volna, adtak egy
				feladatsort, amit a látottak alapján majd ki tudnánk tölteni. Mi ketten plusz Domi és
				Zsombor együtt dolgoztunk a feladatsort kitöltésén, legalábbis ez volt a terv mert Ádámot az
				elején elveszítettük :/
			</p>
			<p>
				A hely elég hangulatosan be volt rendezve, volt egy fegyverraktár, ahol már nem csak
				játékfegyverek voltak, hanem vaskardok is, amik ugyan tompák voltak, de rendesen ütöttek.
			</p>
			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/jurisics/outer.jpg" title="A vár kívülről" />
				<ExpandablePicture src="/img/jurisics/garden.jpg" title="A belső kert ketreccel" />
			</div>
			<div class="pic-group grid-cols-2 md:grid-cols-4">
				<ExpandablePicture src="/img/jurisics/miklos.jpg" title="Jurisics Miklós szobra" />
				<ExpandablePicture src="/img/jurisics/1v1.jpg" title="Intenzív leszámolás" />
				<ExpandablePicture src="/img/jurisics/bell.jpg" title="Ébresztő mindenkinek" />
				<ExpandablePicture src="/img/jurisics/shoe.jpg" title="Győzedelmi cipő felhúzva" />
			</div>
			<p>
				Sajnos már nincs meg a feladatsor, de néhány feladatra emlékszem. Volt egy olyan, amihez fel
				kellett mászni a harang tornyába. Több olyan feladat is volt, ahol a plakátokon kiírt
				információkat kellett leolvasni vagy meg kellett számolni dolgokat. A legnehezebb feladat
				egy falba vésett betű megtalálása volt. Több csapat kereste egyszerre, de így is csak sok
				idő után találtuk meg. Ez a feladatsor valójában egy verseny volt, hogy ki tud több kérdést
				helyesen megválaszolni. Nekünk sikerült is 1 hibával, amivel elsők lettünk.
			</p>
		</article>
		<article>
			<h2>Iseum</h2>
			<span class="subtitle">Szombathely</span>
			<p>
				Utolsó előtti megállónk Szombathely volt. Sajnos csak péntek volt, ezért nem volt teljes a
				kirándulás :/ Először elmentünk megnézni az Iseumot, hosszabb nevén az Ízisz-múzeumot, ami a
				restaurált Ízisz-szentélyben és a környező épületekben állított ki dolgokat. Először magába
				a szentélybe mentünk be, majd visszamentünk a főépületbe, ahol a tárlatvezetőnk elmesélte a
				hely törénetét.
			</p>
			<p>
				A múzeumlátogatás után elengedtek minket enni valamit. Először a McDonald's-ba mentünk
				volna, de sajnos olyan hosszú volt a sor, hogy abba beleöregedtünk volna. Ezért inkább a
				kevesebb, mint száz méterre levő pizzázóba mentünk enni. Viszonylag gyorsan kész lett, így
				még maradt egy kis időnk körbenézni a környéken.
			</p>
			<div class="pic-group grid-cols-2 md:grid-cols-4">
				<ExpandablePicture src="/img/szombat/iseum/front.jpg" title="Az Iseum" />
				<ExpandablePicture src="/img/szombat/iseum/isis.jpg" title="Ízisz istennő szobra" />
				<ExpandablePicture src="/img/szombat/iseum/explain.jpg" title="A tárlatvezető magyaráz" />
				<ExpandablePicture src="/img/szombat/eat.jpg" title="Éhes gyermek pizzát eszik" />
			</div>
			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/szombat/iseum/dry.jpg" title="💀💀" on:click={funny} />
				<ExpandablePicture
					src="/img/szombat/iseum/pieces.jpg"
					title="Márványdarabok a lerombolt szentélyből"
				/>
			</div>
			<audio src="/audio/dry1.wav" bind:this={audio1} on:ended={() => (playing = false)} />
			<audio src="/audio/dry2.wav" bind:this={audio2} on:ended={() => (playing = false)} />
		</article>
		<article>
			<h2>Püspökvár-Toronykilátó</h2>
			<span class="subtitle">Győr</span>
			<p>
				Püspökvár kilátó. Szent László szobrocska? A kilátóról el lehetett látni egészen a
				Pannonhalmi Apátságig.
			</p>

			<div class="pic-group grid-cols-1 md:grid-cols-2">
				<ExpandablePicture src="/img/gyor/viewpoint-1.jpg" title="A város a kilátóról #1" />
				<ExpandablePicture src="/img/gyor/viewpoint-2.jpg" title="A város a kilátóról #2" />
				<ExpandablePicture src="/img/gyor/box.jpg" title="Loot box" />
				<ExpandablePicture src="/img/gyor/laci.jpg" title="Laci aranyszobor" />
			</div>
			<p>
				A végén még maradt egy kis időnk szabad sétára, evésre. Amikor indultunk volna Szomathelyről
				Győr felé, késett a busz, így csak kevés szabadidő maradt. A legtöbb, amit sikerült
				csinálni, az elsétálni a legközelebbi boltba és venni italt, majd visszasétálni a buszhoz.
			</p>
			<p>
				Egyesek sajnos nem vették észre az idő hiányát, így kellett egy negyed órát várni még,
				mielőtt indulhattunk volna...
			</p>
		</article>
		<article>
			<h2>Végszó</h2>
			<span class="subtitle">Budapest</span>
			<p>Összességében elég jó volt a kirándulás, minden hely tartogatott valami emlékezeteset.</p>
			<p>Tarts velünk jövőre is, a leendő, 2023-as tanulmányi kirándulási blogunkon.</p>
			<h4 class="w-full m-auto text-center mt-12">Köszönjük a figyelmet!</h4>
			<a class="block w-full m-auto text-center italic text-sm opacity-50 link" href="/">(vissza a főoldalra)</a>
		</article>
	</ArticleContainer>
</template>
