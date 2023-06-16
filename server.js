const { error } = require("console");
const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("Hey Node api");
});

app.listen(3000, () => {
  console.log("Node api is runnig on port 3000");
});
