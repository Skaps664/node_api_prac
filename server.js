const { error } = require("console");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//routes
app.get("/", (req, res) => {
  res.send("Hey Node api");
});
app.get("/blog", (req, res) => {
  res.send("This is where i will post my blogposts");
});
app.post("/product", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

mongoose
  .connect(
    "mongodb+srv://admin:123456789Admin@nodeapi.kpgbi78.mongodb.net/NODE_API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log("Node api is runnig on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
