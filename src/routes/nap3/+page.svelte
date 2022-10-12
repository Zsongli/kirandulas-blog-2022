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

<ArticleContainer title="A harmadik nap" date="2022. 09. 09" prevHref="/nap2">
	<article>
		<h2>Jurisics-vár</h2>
		<span class="subtitle">Kőszeg</span>
		<p>
			A harmadik és egyben utolsó napon gyors osszepakolás után útnak indultunk a nap első
			megállójához Kőszeghez. Itt a Jurisics-várat látogattuk meg, és még tervben volt egy szabad
			séta is, de végül azt inkább a következő helyre hagytuk. A vár kapuján belépve elénk tárult az
			udvar, ami most le volt zárva mert egy színpad fel volt állítva(?). Volt itt egy [szuvenír]
			bolt is, sokan egyből elkezdtek kardozni a kirakott játékfegyverekkel. Ezután bemehettünk a
			valódi kiállítás részre, de még mielőtt elengedtek volna, adtak egy feladatsort, amit a
			látottak alapján majd ki tudnánk tölteni. Én (Toma), Ádám, Domi és Zsombor együtt töltöttük a
			feladatsort ki, legalábbis ez volt a terv mert Ádámot az elején elveszítettük :/
		</p>
		<p>
			Sajnos már nincs meg a feladatsor, de néhány feladatra emlékszem. Volt egy olyan, amihez fel
			kellett mászi a harang tornyába. Több olyan feladat volt, ahol a plakátokon kiírt
			információkat kellett leolvasni, vagy meg kellett számolni dolgokat. A legnehezebb feladat egy
			falba vésett betű megtalálása volt. Több csapat kereste egyszerre, mégis csak sok idő után
			lett meg. Ez a feladatsor valójában egy verseny volt, hogy ki tud több kérdést helyesen
			megválaszolni. Nekünk sikerült is 1 hibával, amivel elsők lettünk. (50%-os matek ötös (bruh))
		</p>
		<div class="mt-6 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
			<ExpandablePicture src="/img/jurisics-outer.jpg" title="A vár kívülről" />
			<ExpandablePicture src="/img/jurisics-garden.jpg" title="A belső kert ketreccel" />
		</div>
		<div class="mb-6 mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
			<ExpandablePicture src="/img/jurisics-miklos.jpg" title="Jurisics Miklós szobra" />
			<ExpandablePicture src="/img/jurisics-bell.jpg" title="Ébresztő mindenkinek" />
			<ExpandablePicture src="/img/jurisics-1v1.jpg" title="Intenzív leszámolás" />
			<ExpandablePicture src="/img/jurisics-shoe.jpg" title="Győzedelmi cipő felhúzva" />
		</div>
	</article>
	<article>
		<h2>Iseum</h2>
		<span class="subtitle">Szombathely</span>
		<p>
			Utolsó előtti megállónk Szombathely volt. Sajnos csak péntek volt, ezért nem volt teljes a
			kirándulás :/ Először elmentünk megnézni az Iseumot, hosszabb nevén az Ízisz-múzeumot, ami a
			restaurált Ízisz-szentélyben és a környező épületekben állított ki dolgokat. Először magába a
			szentélybe mentünk be, majd visszamentünk a főépületbe, ahol a tárlatvezetőnk elmesélte a hely
			törénetét.
		</p>
		<p>
			A múzeumlátogatás után elengedtek minket enni valamit. Először a McDonald's-ba mentünk volna,
			de sajnos olyan hosszú volt a sor, hogy abba beleöregedtünk volna. Ezért inkább a kevesebb,
			mint száz méterre levő pizzázóba mentünk enni. Viszonylag gyorsan kész lett, így még maradt
			egy kis időnk körbenézni a környéken.
		</p>
		<div class="mt-6 mb-4 grid grid-cols-2 md:grid-cols-4 gap-4">
			<ExpandablePicture src="/img/szombat-is-front.jpg" title="Az Iseum" />
			<ExpandablePicture src="/img/szombat-is-isis.jpg" title="Ízisz isteennő szobra" />
			<ExpandablePicture src="/img/szombat-is-explain.jpg" title="A tárlatvezető magyaráz" />
			<ExpandablePicture src="/img/szombat-eat.jpg" title="Éhes gyermek pizzát eszik" />
		</div>
		<div class="mb-6 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
			<ExpandablePicture src="/img/szombat-is-dry.jpg" title="💀💀" on:click={funny} />
			<ExpandablePicture
				src="/img/szombat-is-pieces.jpg"
				title="Márványdarabok a lerombolt szentélyből"
			/>
		</div>
		<audio src="/audio/dry1.wav" bind:this={audio1} on:ended={() => (playing = false)} />
		<audio src="/audio/dry2.wav" bind:this={audio2} on:ended={() => (playing = false)} />
	</article>
</ArticleContainer>
