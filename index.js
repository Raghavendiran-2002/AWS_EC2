const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Successfully Connected to AWS server🎉🎉");
});

app.listen(3000);
