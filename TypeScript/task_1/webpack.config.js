import { resolve as _resolve } from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const entry = "./js/main.ts";
export const devtool = "inline-source-map";
export const resolve = {
  extensions: [".tsx", ".ts", ".js"]
};
export const devServer = {
  contentBase: "./dist"
};
export const plugins = [
  new ForkTsCheckerWebpackPlugin(),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: "Development"
  })
];
export const output = {
  filename: "bundle.js",
  path: _resolve(__dirname, "dist")
};
