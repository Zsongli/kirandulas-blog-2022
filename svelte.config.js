import adapter from "@sveltejs/adapter-vercel";
import sveltePreprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [
		sveltePreprocess({
			postcss: {
				configFilePath: "./postcss.config.cjs"
			}
		})
	],
	kit: {
		adapter: adapter()
	}
};
