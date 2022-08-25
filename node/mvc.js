const https = require('https');

class Controller 
{
  constructor(port)
  { 
    https.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Hello World!');
      res.end();
    }).listen(port);
  }
}

class Model 
{
  constructor()
  {
    this.getter = (n) => {}
  } 
}

class View
{
  constructor()
  {
    this.html = "";
  }
  send(req)
  {
    req.write(this.html);
  }
}
