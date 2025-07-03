// server.mjs
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Enter your Details </h1>');
  res.write('<form>');


  
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
  }
  {
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Bye bye </h1></body>');
  res.write('</html>');
  res.end();

  }
  
});

// starts a simple http server locally on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log('Listening on 127.0.0.1:3000');
});

