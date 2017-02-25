var config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 7777
   },

   module: {
      loaders: [{
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
            presets: ['es2015', 'react']
         }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /.(png|jpg)$/,
        loader: "url-loader?limit=8192"
      }
    ]
   }
}

module.exports = config;
