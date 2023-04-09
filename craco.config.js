const craco_alias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: craco_alias,
      options: {
        baseUrl: './src',
        source: 'tsconfig',
        tsConfigPath: './tsconfig.json',
      },
    },
  ],
}
