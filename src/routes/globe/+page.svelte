<div class="globe">
	<div class="map"/>
</div>


<style lang="postcss">
    
    @property --rotation {
        syntax: "<percentage>";
        initial-value: 0%;
        inherits: false;
    }

    @keyframes spin {
        0% {
            --rotation: 0%;
        }
        100% {
            --rotation: 186%;
        }
    }

    .globe {
        margin: auto;
		min-height: max(25vw, 200px);
		min-width: max(25vw, 200px);
		width: 50vmin;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: lightskyblue;
		clip-path: circle();
        box-shadow: inset 0 0 calc(max(50vmin, max(25vw, 200px)) / 5) #000000;
        transform: rotateZ(23.5deg);
	}
    
	.map {
        animation: spin 2s linear infinite;
        background-color: olivedrab;
		mask-image: url("worldmap.svg");
		mask-size: cover;
		mask-repeat: repeat-x;
        mask-position: var(--rotation);
        box-shadow: inset 0 0 calc(max(50vmin, max(25vw, 200px)) / 5) #000000;
		height: 100%;
	}
</style>
