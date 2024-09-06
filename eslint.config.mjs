// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsdoc from 'eslint-plugin-jsdoc';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,

    {
        plugins: {
            jsdoc,
        },
        rules: {
            "jsdoc/check-indentation": ["error", { "excludeTags": ["example"] }],
            '@typescript-eslint/consistent-type-definitions': 'off',
            'no-console': 'error',
            "@typescript-eslint/semi": ["error", "always"],
            "jsdoc/require-jsdoc": ["warn", {
                contexts: [
                    "TSTypeAliasDeclaration",
                    "TSTypeLiteral>TSPropertySignature"
                ]
            }],
            "max-len": ["error", { "code": 120, "tabWidth": 4, "ignoreUrls": true }],
            "lines-around-comment": [
                "warn",
                {
                    "beforeLineComment": true,
                    "allowBlockStart": true,
                    "ignorePattern": "pragma|ignore",
                }
            ],
        }
    },
    {
        files: ['src/index.ts'],
        rules: {
            "jsdoc/require-jsdoc": ["warn", {
                contexts: ["TSTypeAliasDeclaration"]
            }]
        }
    }
);