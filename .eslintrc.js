module.exports = {
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended"
	],
	settings: {
		"react": {
			"version": "detect"
		}
	},
	parserOptions: {
		"ecmaFeatures": {
			"jsx": true
		}
	},
	rules: {
		// off
		"react/react-in-jsx-scope": "off",
		"react/display-name": "off",
		"react/prop-types": "off",

		// warn
		"react/no-unused-prop-types": "warn",
		"react/jsx-wrap-multilines": "warn",

		// error
		"react/jsx-closing-bracket-location": "error",
		"react/jsx-props-no-multi-spaces": "error",
		"react/self-closing-comp": "error",
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
		],
	}
}
