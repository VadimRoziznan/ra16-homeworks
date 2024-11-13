module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['state'], // Исключаем модификации state в редьюсерах
    }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // Разрешаем JSX в .js и .jsx файлах
    'react/react-in-jsx-scope': 'off', // Отключаем правило, требующее React в области видимости
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // Разрешаем devDependencies
  },
};
