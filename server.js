const http = require('http');

const PORT = process.env.PORT || 3000;

const httpServer = http.createServer((reg, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('result');
});

httpServer.listen(PORT, () => {
  console.log(`Server listen http://localhost:${PORT}`);
});
