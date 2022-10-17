<script lang="ts">
	import { onMount } from "svelte";
	import "$lib/styles/leaflet.pcss";
	var L: typeof import("leaflet");

	export var bounds:
		| { sw: { lat: number; lng: number }; ne: { lat: number; lng: number } }
		| undefined = undefined;
	export var position: { lat: number; lng: number } = { lat: 0, lng: 0 };
	export var zoom: number = 7;
	export var minZoom = 0;
	export var markers: { lat: number; lng: number; title: string }[] = [];

	var map: L.Map;
	var markerLayer: L.LayerGroup;
	const id = `leaflet-${crypto.randomUUID()}`;
	var icon: L.Icon;
	var mounted = false;
	
	function updateMarkers(markers: { lat: number; lng: number; title: string }[]) {
		markerLayer.clearLayers();
		markers.forEach((marker) =>
			new L.Marker(marker, { icon, riseOnHover: true }).addTo(markerLayer).bindTooltip(marker.title)
		);
	}

	$: mounted && map.setView(position, zoom);
	$: mounted &&
		bounds != null &&
		map.setMaxBounds(
			new L.LatLngBounds(
				new L.LatLng(bounds.sw.lat, bounds.sw.lng),
				new L.LatLng(bounds.ne.lat, bounds.ne.lng)
			)
		);
	$: mounted && updateMarkers(markers);


	onMount(async () => {
		L = await import("leaflet");

		map = new L.Map(id, {
			maxBounds:
				bounds != null
					? new L.LatLngBounds(
							new L.LatLng(bounds.sw.lat, bounds.sw.lng),
							new L.LatLng(bounds.ne.lat, bounds.ne.lng)
					  )
					: undefined,
			maxBoundsViscosity: 0.8,
			minZoom,
			attributionControl: false
		});

		icon = new L.Icon({
			iconUrl: "/img/map-marker.png",
			iconSize: [16, 16],
			iconAnchor: [8, 8],
			popupAnchor: [8, 8]
		});

		new L.TileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
	        &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
			subdomains: "abcd",
			maxZoom: 14
		}).addTo(map);
		markerLayer = new L.LayerGroup().addTo(map);

		mounted = true;
	});
</script>

<template>
	<div {id} {...$$restProps} />
</template>
