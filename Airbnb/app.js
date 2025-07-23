const express = require("express")

const app = express();

app.use((req, res, next) =>{
  console.log(req.url, req.method);
  res.send("<h1> Hi this is Rahul </h1>")
})

const PORT = 3000;
app.listen(PORT, () =>{
  console.log(`Server running on http://localhost:${PORT}`)
});