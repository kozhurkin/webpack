/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

exports.getDefinitionSchema = (schema, name) => {
	const { definitions } = schema;
	return {
		definitions,
		oneOf: [
			{
				$ref: `#/definitions/${name}`
			}
		]
	};
};
