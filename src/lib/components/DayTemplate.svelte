<script lang="ts">
	import Fa from "svelte-fa";
	import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="max-w-5xl mx-auto bg-base-200">
	<div class="max-w-4xl mx-auto flex flex-col gap-8 p-4">
		<div class="absolute top-0 invisible" id="top" />
		<slot />
		<div>
			<a href="#top" class="btn btn-primary gap-4">
				Vissza az elejére
				<Fa icon={faArrowTurnUp} size="1.5x" />
			</a>
		</div>
	</div>
</div>
