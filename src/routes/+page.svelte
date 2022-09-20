<script lang="ts">
	import Fa from "svelte-fa";
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
</script>

<div class="hero bg-neutral mt-[20vh]">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Üdvözlet!</h1>
			<p class="py-6">
				Az oldal éppen készülőben van. Látogass vissza kicsit később, vagy fedezd fel a kódot
				változás közben Github-on!
			</p>
			<a
				rel="external"
				href="https://github.com/Zsongli/kirandulas-blog-2022"
				class="btn btn-primary gap-2"><Fa icon={faGithub} />Github</a
			>
		</div>
	</div>
</div>
