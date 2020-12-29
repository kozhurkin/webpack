/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */

/**
 * Function that executes for module and should return whenever asset should be inlined as DataUrl.
 */
export type AssetParserDataUrlFunction = (
	source: string | Buffer,
	context: {filename: string; module: import("../../lib/Module")}
) => boolean;

export interface AssetModulesPluginParserOptions {
	/**
	 * The condition for inlining the asset as DataUrl.
	 */
	dataUrlCondition?: AssetParserDataUrlOptions | AssetParserDataUrlFunction;
}
/**
 * Options object for DataUrl condition.
 */
export interface AssetParserDataUrlOptions {
	/**
	 * Maximum size of asset that should be inline as modules. Default: 8kb.
	 */
	maxSize?: number;
}
