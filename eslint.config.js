import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        crypto: 'readonly',
        SpeechSynthesisUtterance: 'readonly',
        Phaser: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        clearTimeout: 'readonly',
        Date: 'readonly',
        Math: 'readonly',
        Uint32Array: 'readonly',
        performance: 'readonly',
        URL: 'readonly',
        Blob: 'readonly',
        navigator: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', caughtErrors: 'none' }],
      'no-console': 'warn',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', 'public/**'],
  },
];
