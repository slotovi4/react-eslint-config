module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint",
		"import"
	],
	parserOptions: {
		"ecmaVersion": 2020,
		"sourceType": "module",
		"project": "./tsconfig.json",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended"
	],
	settings: {
		"react": {
			"version": "detect"
		}
	},
	rules: {
		"react/jsx-props-no-multi-spaces": "error",
		"react/jsx-closing-bracket-location": "error",
		"react/self-closing-comp": "error",
		"react/no-unused-prop-types": "warn",
		"react/jsx-wrap-multilines": "warn",
		"react/display-name": "off",
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-indent": [
			"error",
			"tab"
		],
		"react/jsx-indent-props": [
			"error",
			"tab"
		],
		"react/jsx-max-props-per-line": [
			"error",
			{
				"maximum": 1,
				"when": "multiline"
			}
		]
	}
}
