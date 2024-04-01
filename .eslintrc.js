export default {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": "standard-with-typescript",
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
		"@typescript-eslint/prefer-nullish-coalescing": "off",
		"semi": "error",
		"prefer-const": "error",
		"no-const-assign": "error",
		"no-extra-semi": "error",
		"quotes": ["error", "single"],
		"eol-last": "error",
		"indent": ["error", 2],
		"comma-dangle": ["error", "never"],
		"no-console": "warn",
		}
};