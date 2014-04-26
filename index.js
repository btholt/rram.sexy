var connect = require('connect'),
  http = require('http'),
  directory = './dist';

var port = 8080;

connect()
  .use(connect.static(directory))
  .listen(port);

console.log('Listening on port ' + port);