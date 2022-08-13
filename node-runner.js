// something like: node-runner index.html
const http = require('http');
const fs = require('fs');
const process = require('process');

var server = {
  port : 3000,
  routes : {"/":(req) => {}},
  create: function() {
    http.createServer((req, res) => {
      if(routes[res.url] == undefined)
      {
        res.write("Content-type: text/html");
        res.write("<code>Cannot GET /" + req.url + "</code>");
      }
      res.write(this.routes[req.url](req));
    }).listen(this.port);
  }
};

var file = process.argv[1] || "index.html";

server.routes["/"] = function(req)
{
  var x = "Content-type: text/html";
  fs.readFile(file, (data) => {
    data = data.replace(/<server-script>*<\/server-script>/g, function(s) {
      s = s.replace("<server-script>","").replace("</server-script>","");
      eval(s);
    }
  });
}

  
