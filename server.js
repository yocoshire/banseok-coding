var http = require('http'); 

var server = http.createServer(function(request,response){ 

    response.writeHead(200);
    response.end('Successed');

});

server.listen(80);