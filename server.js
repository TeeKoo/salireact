var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var httpProxy = require('http-proxy')
var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

var apiUrl = 'http://localhost:8080';

var proxy = httpProxy.createProxyServer({});

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/salit", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/salit/:id", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/ohjelma", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.all('/api/*', function (req, res) {
  proxy.web(req, res, { target: apiUrl });
});

proxy.on('error', function(e) {
  console.log('Error proxying ' + apiUrl, e);
});

var server = app.listen(port, function () {
  console.log('Proxying API: http://localhost:' + server.address().port + ' -> ' + apiUrl);
});