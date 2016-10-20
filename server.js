/**
 * Created by xtong on 16/7/7.
 */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.conf');

var app = express();
var compiler = webpack(config);
var port = 80;

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    process.exit();
});

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));


app.get('*', function (req, res) {
    console.log('test');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:' + port);
});