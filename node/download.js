const https = require('https');

function download(URL, filename)
{
https.get(URL, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    fs.writeFile(filename, data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
}
