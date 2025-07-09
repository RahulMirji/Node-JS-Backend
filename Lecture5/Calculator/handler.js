const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
console.log(req.url, req.method);
  if (req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <body>
      <h1> Hi Welcome to my coding page</h1>
      </body>
      <a href= "/calculator"> Go to Calculator</a>
      </html>
    `);
  return res.end();
}else if (req.url.toLowerCase() === "/calculator"){res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <body>
      <h1> Here the Calculator</h1>
      <a href= "/calculator"> Go to Calculator</a>
      </body>
      
      <form action="/calculate-result" method = "POST">
        <input type="text" name="first" id="" placeholder="First Num" />
        <input type="text" name="second" id="" placeholder="Second Num" />
        <input type="submit" name="" id="">
      </form>
      </html>
    `);
  return res.end();
}else if(req.url.toLowerCase() === "/calculate-result" && req.method === "POST"){
return sumRequestHandler(req, res);
}
   res.setHeader('Content-Type', 'text/html');
   res.write(`
    <html>
    <body>
    <h1> 4o4 page not found</h1>
    </body>
    <a href= "/"> Go to Home</a>
    </html>
  `);
  return res.end();
}

exports.requestHandler = requestHandler;