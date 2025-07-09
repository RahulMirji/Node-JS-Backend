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
 }
)}

exports.sumRequestHandler = sumRequestHandler;
