var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './js/app.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [
            // js
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['react', 'es2015','stage-0']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(otf|eot|svg|ttf|woff)/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};