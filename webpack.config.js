import path from 'path';

module.exports = {
  devtool: 'sourcemap',
  output: {
    path: path.resolve(__dirname, 'client/app/app.js'),
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.styl$/, loader: 'style!css!stylus' },
       { test: /\.less$/, loader: 'style!css!less' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
