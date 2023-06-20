module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'next/core-web-vitals', 'plugin:prettier/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: ['prettier'],
  rules: {
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
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
    'react/require-default-props': 'off',
    'no-restricted-exports': 'off'
  },
};
