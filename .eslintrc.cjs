// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended, // Rekommenderade ESLint-regler för JavaScript
  {
    files: ['**/*.{ts,tsx}'], // Applicera på alla TypeScript-filer
    plugins: {
      '@typescript-eslint': typescript, // Använder TypeScript ESLint-plugin
    },
    rules: {
      'no-unused-vars': 'error', // Fel om oanvända variabler
      '@typescript-eslint/no-unused-vars': 'error', // Typkontrollerade regler för oanvända variabler
      'react-hooks/rules-of-hooks': 'error', // Fel om hooks inte används korrekt
      'react-hooks/exhaustive-deps': 'warn', // Varning för ouppfyllda beroenden i hooks
    },
  },
  {
    plugins: {
      react, // Använder React ESLint-plugin
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021, // Modern JavaScript
        sourceType: 'module', // ES-moduler
        ecmaFeatures: {
          jsx: true, // Aktivera JSX-stöd
        },
      },
      globals: {
        React: 'writable', // Använd React globalt i projektet utan explicit import
      },
    },
  },
];
