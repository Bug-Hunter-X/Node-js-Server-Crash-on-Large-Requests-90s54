const http = require('http');
const maxBodySize = 1024 * 1024; // 1MB

const server = http.createServer((req, res) => {
  let body = '';
  let bodySize = 0;
  req.on('data', (chunk) => {
    bodySize += chunk.length;
    if (bodySize > maxBodySize) {
      res.writeHead(413, { 'Content-Type': 'text/plain' });
      res.end('Request body too large');
      req.destroy(); // added line
      return;
    }
    body += chunk.toString();
  });

  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Received: ${body.length} bytes`);
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