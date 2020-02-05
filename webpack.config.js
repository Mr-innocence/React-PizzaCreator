const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'url-loader'
        ]
      },
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: 'babel-loader',
          options:{
            presets: ['@babel/preset-react'],
          },
        },
      },
    ]
  }
};