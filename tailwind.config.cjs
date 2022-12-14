const config = {
	content: ["./src/**/*.{html,js,svelte,ts,pcss}"],

	theme: {
		extend: {
			screens: {
				"xs": "370px",
			}
		}
	},

	plugins: [require("daisyui")],

	daisyui: {
		themes: [
			{
				dark: {
					"primary": "#2e31db",
					"secondary": "#142f87",
					"accent": "#148669",
					"neutral": "#1d1d24",
					"base-100": "#23222a",
					"info": "#0d8bbf",
					"success": "#008b00",
					"warning": "#8d7000",
					"error": "#c43e3c"
				}
			}
		]
	}
};

module.exports = config;
