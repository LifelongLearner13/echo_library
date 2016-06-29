var echoServer = require('echo_server');

echoServer.echoServer.get('/version', function(request, response) {
  response.json({
    version: request.httpVersionMajor + "." + request.httpVersionMinor,
  });
});