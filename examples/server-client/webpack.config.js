/** @type {import("../../").Configuration} */
module.exports = {
	entry: {
		page: {
			import: "./page.js",
			layer: "server",
			library: {
				type: "commonjs-module",
				export: "default"
			}
		}
	},
	target: "node",
	output: {
		filename: "[name].js",
		chunkFilename: "[name].js",
		enabledChunkLoadingTypes: ["...", "jsonp"],
		enabledChunkFormatTypes: ["...", "array-push"]
	},
	module: {
		rules: [
			{
				test: /\.[cm]?js$/,
				parser: {
					entries: {
						CLIENT: {
							entryOptions: {
								name: "client",
								layer: "client",
								chunkLoading: "jsonp",
								chunkFormat: "array-push",
								initialChunkFilename: "client/[name].js",
								chunkFilename: "client/[name].js"
							},
							return: "files"
						},
						CLIENT_MODERN: {
							entryOptions: {
								name: "modern",
								layer: "modern",
								chunkLoading: "jsonp",
								chunkFormat: "array-push",
								initialChunkFilename: "client/modern-[name].js",
								chunkFilename: "client/modern-[name].js"
							},
							return: "files"
						}
					}
				}
			},
			{
				test: /\.[cm]?js$/,
				parser: {
					entries: {
						API: (info, request, name) => ({
							entryOptions: {
								name: `api/${name}`,
								layer: "server",
								chunkLayer: "server",
								chunkLoading: "require",
								chunkFormat: "commonjs",
								runtime: "api-runtime",
								library: {
									type: "commonjs-module",
									export: "default"
								}
							},
							value: `/${name}`
						})
					}
				}
			}
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				merge: {
					name: "merged",
					test: /helper/,
					layer: "server",
					enforce: true
				}
			}
		}
	},
	externals: {
		byLayer: {
			server: {
				react: "react"
			}
		}
	},
	experiments: {
		topLevelAwait: true,
		layers: true
	}
};
