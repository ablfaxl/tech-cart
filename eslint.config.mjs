/* eslint-disable import/order */
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // Best Practices
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Allow only warnings and errors
      'no-alert': 'warn', // Prevent using alert, confirm, and prompt
      curly: ['error', 'all'], // Enforce curly braces for all control statements
      eqeqeq: ['error', 'always'], // Enforce strict equality (===)

      // Code Quality
      'import/order': ['error', { alphabetize: { order: 'asc' } }], // Enforce ordered imports
      'sort-imports': [
        'error',
        { ignoreCase: false, ignoreDeclarationSort: true },
      ], // Sort imports
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Allow unused variables prefixed with _
      'prefer-const': 'error', // Prefer const over let when possible
      'no-var': 'error', // Disallow var, use let or const

      // React & Next.js Specific
      'react-hooks/rules-of-hooks': 'error', // Enforce Hooks rules
      'react-hooks/exhaustive-deps': 'warn', // Warn for missing dependencies in useEffect
      'react/jsx-boolean-value': ['error', 'never'], // Enforce shorthand boolean props (e.g., `<Component disabled />`)
      'react/jsx-sort-props': [
        'error',
        { callbacksLast: true, shorthandFirst: true },
      ], // Sort JSX props

      // Next.js Specific
      '@next/next/no-img-element': 'off', // Allow <img> instead of forcing <Image />
      '@next/next/no-html-link-for-pages': 'off', // Disable enforcing Next.js <Link>

      // TypeScript Specific
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ], // Allow unused variables prefixed with _
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // Enforce type over interface
      '@typescript-eslint/no-explicit-any': 'warn', // Warn against `any` usage
    },
  },
];

export default eslintConfig;
