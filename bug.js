const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common error when handling large files.  It can cause memory leaks.
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });

  req.on('end', () => {
    // If the request body is too large, it could crash the Node.js process.
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  });

  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});