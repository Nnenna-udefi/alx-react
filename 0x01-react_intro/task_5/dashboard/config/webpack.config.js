const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        hot: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              "file-loader",
              {
                loader: "image-webpack-loader",
                options: {
                  bypassOnDebug: true,
                  disable: true,
                },
              },
            ],
          },
          
        ],
      },

      plugins: [ new HtmlWebpackPlugin({ template: './src/index.js' }) ],
};