import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
  // 1. Стандартні рекомендовані правила JS
  js.configs.recommended,

  // 2. Інтеграція Prettier (підключає плагін та вимикає конфліктні правила)
  eslintPluginPrettierRecommended,

  // 3. Загальні налаштування середовища та власних правил
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      // Тут можна додавати свої власні правила ESLint за потреби
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },

  // 4. Ігнорування файлів та папок
  {
    ignores: ['node_modules/', 'dist/', 'coverage/'],
  },
];
