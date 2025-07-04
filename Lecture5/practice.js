const http = require('http');
 
const server = http.createServer((req, res) =>{
res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Heading</title>
</head>
<body>
  <label for="Name" id="name">Name</label>
  <input type="text" type="submit" id="name" placeholder="Enter your Name here">
</body>
</html>`)
}) 

server.listen(3000, () =>{
  console.log('Listening on 127.0.0.1:3000');
})