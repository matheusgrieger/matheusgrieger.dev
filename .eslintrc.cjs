module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:astro/recommended',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],

    'no-restricted-exports': 'off',
  },
  overrides: [
    {
      files: ['*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
      extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
};
