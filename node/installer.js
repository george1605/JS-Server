const https = require('https');
const fs = require('fs');

if(process.argv.length < 3)
  process.exit(0);

var source = "https://github.com/george1605/JS-Server";
