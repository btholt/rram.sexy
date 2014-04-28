var connect = require('connect'),
  http = require('http'),
  directory = './dist';

var fs = require('fs');
var html = fs.readFileSync(__dirname + '/dist/index.html');

var port = 8080;

connect()
  .use('/js', connect.static(__dirname + '/dist/js'))
  .use('/css', connect.static(__dirname + '/dist/css'))
  .use('/img-optim', connect.static(__dirname + '/dist/img-optim'))
  .use('/', function(req, res){
    res.end(html);
  })
  // .use(function(req, res){
  //   res.writeHeader(404);
  //   res.end('404 Motherfucker');
  // })
  .listen(port);

console.log('Listening on port ' + port);