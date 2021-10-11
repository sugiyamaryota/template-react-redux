module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: ['react-refresh/babel'],
  env: {
    development: {},
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    },
  },
}
