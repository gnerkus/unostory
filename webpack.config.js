var webpack = require('webpack');
var path = require('path');
var srcPath = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    bundle: path.join(srcPath, 'app.js'),
    common: ['react', 'react-router', 'redux', 'react-redux']
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'bower_components']
  },

  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(jpg|png)$/,
        loaders: ['url?limit=25000'],
        include: path.resolve(__dirname, 'images')
      }
    ]
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin(
      {
        name: "common",
        minChunks: 2
      }
    ),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
