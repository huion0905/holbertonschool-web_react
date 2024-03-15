const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development', // switching to developer mode 
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js', 
    footer: './modules/footer/footer.js',
  },
  devServer: {
    static: './public', //  Directory where the content will be served from
    port: 8564, // Execution port for the development server
    open: true, // Automatically open the browser
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'inline-source-map', // Enable inline font mapping
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
    }),
    new CleanWebpackPlugin(), // Clean the output folder before each compilation
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          'file-loader', // Use file-loader for basic image handling
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
    ],
  },
};