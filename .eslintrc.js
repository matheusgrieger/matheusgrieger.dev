module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'react/prop-types': 'off',
    'no-console': [
      'error',
      { allow: ['warn', 'error'] },
    ],
  },
};
