const http = require('http');

const port = 1245;

const app = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server is listening in port ${port}`);
});

module.exports = app;
