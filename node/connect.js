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
