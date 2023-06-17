const { error } = require("console");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/productModel");

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hey Node API");
});
app.get("/blog", (req, res) => {
  res.send("This is where i will post my blogposts");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
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
