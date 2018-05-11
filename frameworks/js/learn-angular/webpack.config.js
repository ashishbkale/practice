module.exports = {
	entry: "./src/main.ts",
	output: {
		filename: "bundle.js"
	},
	module: {
		rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.tsx?$/, loader: "ts-loader" }
		]
	},
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: [".ts", ".tsx", ".js"]
	}
};
