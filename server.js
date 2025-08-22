const http = require('http');
const app = require('./app.js');

const PORT = process.env.PORT || 3000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server listen http://localhost:${PORT}`);
});
