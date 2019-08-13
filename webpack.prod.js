const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge.smart(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: false,
            },
          },
        ],
      },
    ]
  }
});