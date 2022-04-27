var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'html-loader' },
       { test: /\.(scss|sass)$/, loader: 'style!css?sourceMap!resolve-url?sourceMap!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true' },
       { test: /\.css$/, loader: 'style!css' },
       { test: /\.(jpg|png|svg)$/, loader: 'file-loader?name=assets/[name].[hash].[ext]'},
       { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
       { test: /\.json$/, loader: 'json' },
       { test: /\.md$/, loader: "html-loader!markdown-loader?gfm=false" },
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'client/app/images'),
        to: 'images'
    }]),

    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'client/app/pages'),
        to: 'pages'
    }]),

    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'client/app/data'),
        to: 'data'
    }]),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
