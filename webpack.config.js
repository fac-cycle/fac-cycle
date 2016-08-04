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
    ],
  },
};
