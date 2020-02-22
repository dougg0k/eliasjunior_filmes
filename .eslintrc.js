module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier", "react-hooks"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	plugins: ["@typescript-eslint", "react"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: "module",
		project: "./tsconfig.json",
	},
	root: true,
	rules: {
		"react/prop-types": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/no-unused-vars": [
			0,
			{
				vars: "all",
				args: "after-used",
				ignoreRestSiblings: true,
			},
		],
	},
};
