/**
 * Created by xtong on 16/7/7.
 */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.conf');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(7770, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:7770');
});
