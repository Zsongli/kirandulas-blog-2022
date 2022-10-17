const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const presetEnv = require("postcss-preset-env");

module.exports = {
	plugins: [
		tailwindcss(),
		autoprefixer,
		presetEnv({ features: { "nesting-rules": true } }),
	]
};
