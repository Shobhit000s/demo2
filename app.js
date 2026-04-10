const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from Docker + Jenkins!");
  res.wrire("this is the updated one for the testing");
  res.end();
}).listen(3000);
