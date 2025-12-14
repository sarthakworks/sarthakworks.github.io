import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
    { ignores: ['build', 'dist', 'node_modules'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: { react: { version: '18.3' } },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'jsx-a11y': jsxA11y,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,
            'react/jsx-no-target-blank': 'off',
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/no-unescaped-entities': 'off',
            'react/jsx-no-comment-textnodes': 'off',
            'jsx-a11y/click-events-have-key-events': 'warn',
            'jsx-a11y/no-static-element-interactions': 'warn',
            'jsx-a11y/no-noninteractive-element-interactions': 'warn',
            'jsx-a11y/no-noninteractive-tabindex': 'warn',
            'jsx-a11y/anchor-is-valid': 'warn',
            'jsx-a11y/alt-text': 'warn',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'no-unused-vars': 'error',
        },
    },
];
