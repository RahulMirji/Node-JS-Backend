console.log("Rahul is a Champion");

const fs = require('fs');

fs.writeFile("output.txt", "Writing File", (err) => {
  if(err) console.log("Error Occured");
  else console.log("File Written Successfully");
})