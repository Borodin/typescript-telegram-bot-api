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
            jsdoc
        },
        rules: {
            '@typescript-eslint/consistent-type-definitions': 'off',
            'no-console': 'error',
            "jsdoc/require-jsdoc": ["warn", {
                contexts: [
                    "TSTypeAliasDeclaration",
                ],
            }],
            "max-len": ["error", { "code": 120, "tabWidth": 4, "ignoreUrls": true }],
        }
    },
);