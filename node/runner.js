const http = require('http');
const fs = require('fs');
const process = require('process');

var server = {
  port: 3000,
  routes: { "/": null },
  create: function() {
    http.createServer((req, res) => {
      if (server.routes[req.url] == undefined) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<code>Cannot GET " + req.url + "</code>");
        res.end()
      } else {
        server.routes[req.url](req, res);
        res.end();
      }
    }).listen(this.port);
  }
};

var file = process.argv[1] || "index.html";

server.routes["/"] = (req, res) => {
  var x = "";
  res.writeHead(200, { "Content-type": "text/html" })
  fs.readFile(file, 'utf8', (err, data) => {
    if (err)
      return;
      data = data + "<script src='code.js'></script>";
    });
    x = x + data;
  });
  console.log(x);
  res.write(x);
}

server.create();

