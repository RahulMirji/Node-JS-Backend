const sumRequestHandler = (req, res) =>{
 console.log("In sum Request Hanldler", req.url);
 const body = [];
 req.on('data', chunk => body.push(chunk));
 req.on('end',() => {
  const bodyStr = Buffer.concat(body).toString();
  const params = new URLSearchParams(bodyStr);
  const bodyObj = Object.fromEntries(params);
  const result = Number(bodyObj.first) + Number(bodyObj.second);
  console.log(result);
      
      res.setHeader('Content-Type', 'text/html');
        res.write(`
          <html>
          <body>
          <h1> Your Sum is ${result}</h1>
          <button><a href="/">Go to Home </a></button>
          </body>
          </html>
        `);
        res.end();
    });
    };

exports.sumRequestHandler = sumRequestHandler;
