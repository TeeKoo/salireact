var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql5-ext.sigmatic.fi',
  user     : '',
  password : '',
  database : 'tanelika_salit'
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/salit", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/sali/:id", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/ohjelma", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/getgyms", function(req, res) {

  connection.query('SELECT *, (SELECT COUNT(id) FROM comments WHERE comments.gym_id=gyms.id) as comment_count FROM gyms', function(err, rows, fields) {
    if (err){
      console.log(err)
      res.json({error: "error"});
    } else {
      res.json(rows);
    }
  });
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
