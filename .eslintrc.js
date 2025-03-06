module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest', 'react', 'prettier', 'import'],
    extends: [
      'next',
      'prettier',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/strict',
      'plugin:react/recommended',
    ],
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    ignorePatterns: ['components/Chat/sdk.js', 'code-examples/'],
    rules: {
      'no-console': 'off',
      'prefer-template': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-ts-expect-error': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/no-children-prop': 'off',
      'prettier/prettier': 'error',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
        },
      ],
    },
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  