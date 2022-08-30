var https = require('https');

function monitor(server)
{
  server.activeConnections = 0;
  server.on("connect", function() {
    server.activeConnections++;
  });
  server.on("disconnect", function() {
    server.activeConnections--;
  });
}

function isWebSocket(req)
{
  return (req.headers['Sec-WebSocket-Key'] != undefined);
}

class RequestQueue 
{
  constructor()
  {
    this.queue = [];
  }
  push (req, res)
  {
    var n = {"req":req, "res":res};
    this.queue.push(n);
  }
}
