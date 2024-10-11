// eslint.config.js
// import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
// import typescriptParser from '@typescript-eslint/parser';
// import importHelpersPlugin from 'eslint-plugin-import-helpers';
// import eslintPluginPrettier from 'eslint-plugin-prettier';

// export default [
//   {
//     // Ignora arquivos e pastas (equivalente ao .eslintignore)
//     ignores: ['node_modules/**', 'build/**'],
//   },
//   {
//     // Aplica a configuração a arquivos TypeScript e JavaScript
//     files: ['**/*.ts', '**/*.js'],
//     languageOptions: {
//       ecmaVersion: 'latest', // Suporte ao ECMAScript moderno
//       sourceType: 'module', // Suporte a módulos ES
//       parser: typescriptParser, // Usa o parser do TypeScript
//     },
//     plugins: {
//       '@typescript-eslint': typescriptEslintPlugin, // Plugin TypeScript
//       prettier: eslintPluginPrettier, // Plugin Prettier
//       'import-helpers': importHelpersPlugin, // Plugin para organizar imports
//     },
//     rules: {
//       // Regras específicas
//       'prettier/prettier': 'error',
//       'no-useless-constructor': 'off', // Desativa a regra para construtores inúteis
//       '@typescript-eslint/no-unused-vars': 'off', // Desativa erro de variáveis não usadas
//       'import-helpers/order-imports': [
//         'warn',
//         {
//           newlinesBetween: 'always',
//           groups: [
//             '/^node:*/', // Imports nativos do Node
//             'module', // Pacotes externos
//             ['parent', 'sibling', 'index'], // Imports de arquivos locais
//           ],
//           alphabetize: {
//             order: 'asc', // Ordena os imports em ordem alfabética
//             ignoreCase: true,
//           },
//         },
//       ],
//     },
//   },
// ];

const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const { ESLint } = require('eslint');
const importHelpersPlugin = require('eslint-plugin-import-helpers');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    languageOptions: {
      globals: {
        es2021: true,
        node: true,
      },
      parser: parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        tsconfigRoot: './',
        // project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
      'import-helpers': importHelpersPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: ['/^node:*/', 'module', ['parent', 'sibling', 'index']],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
    },
    ignores: ['**/build/**', '**/node_modules/**'],
  },
];
