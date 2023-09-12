module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
        "prettier"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react', 
        '@typescript-eslint', 
        'i18next', 
        'react-hooks',
        'webify-plugin',
        'unused-imports'
    ],
    rules: {
        "@typescript-eslint/no-namespace": "off",
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx']
        }],
        "unused-imports/no-unused-imports": "error",
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': ['warn', {
            "custom": "ignore",
            "exceptions": ["input", "button", "div"]
        }],
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            'ignoreAttribute': [
                'to', 'fallback', 'onClick', 'data-testid',
                'placeholder', 'name', 'target', 'justify',
                'align', 'direction', 'gap', 'role', 'as',
                'border', 'feature', 'color', 'variant', 'size',
                'wrap',
            ]
        }],
        'max-len': ['error', {
            'code': 120,
            'ignoreComments': true
        }],
        "react/display-name": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error", 
        'webify-plugin/path-checker': ['error', {alias: '@'}],
        'webify-plugin/public-api-imports': ['error', {
            alias: '@',
            testFilesPatterns: ['**/*.test.*', '**/*.testing.*', '**/*.stories.*', '**/StoreDecorator.tsx']
        },
        ],
        'webify-plugin/layer-imports': ['error', {
            alias: '@',
            ignoreImportPatterns: ['**/StoreProvider', '**/testing']
        },
        ],
        'react/jsx-max-props-per-line': ['error', {maximum: 4}]

    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    settings: {
        react: {
            version: 'detected'
        }
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        }
    }]
};