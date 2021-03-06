
module.exports = {
    entry: __dirname + '/app.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              // Options to configure babel with
              options: {
                presets: ['es2015']
              }
            }
        ]
    }
}
