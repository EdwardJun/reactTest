const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 导入在内存中自动生成 index 页面的插进

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html' // 生成的内存中首页的名称
})

// 向外暴露一个打包的配置对象
module.exports = {
  mode: 'development',
  entry: ["babel-polyfill", "@/index.js"],
  plugins: [
    htmlPlugin
  ],
  module: {
    rules: [
      /* {
        test: /.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      } */
      {
        test: /.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg)/,
        use: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}