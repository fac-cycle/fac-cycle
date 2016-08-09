// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

const stringifyValues = o =>
  Object.keys(o)
        .reduce((acc, k) => Object.assign(acc, { [k]: JSON.stringify(o[k]) }), {});

const environmentVariables = process.env.DEVELOPMENT === 'true' ?
  ({ SERVER_ROOT: 'http://localhost:3000' }) : ({ SERVER_ROOT: 'http://example.com:3000' });

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 4000,
  },
  module: {
    loaders: [
      { test: /\.js(x)*$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      {
          test: /\.(jpg|png|gif|svg)$/i,
          loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
      },
    ],
  },
  plugins: [
    (new webpack.DefinePlugin({ 'process.env': stringifyValues(environmentVariables) })),
  ],
};
