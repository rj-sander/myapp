const express = require("express");
const fs = require("fs");
const app = express();
const port = 2000;

app.use(express.json());

app.post("/api/answers", (req, res) => {
  console.log(req.body);
  fs.appendFile("test.csv", req.body + "\r\n", (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  res.status(200).send("Request successful");
});

app.listen(port);
