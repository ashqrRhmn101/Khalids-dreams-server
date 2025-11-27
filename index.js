const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yaijel2.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Server Running message
app.get("/", (req, res) => {
  res.send("Server is Running...........");
});

async function run() {
  try {
    // Connect the client to the server

    const db = client.db("khalids_db");
    const productCollection = db.collection("products");

    // ALl Products related apis ...................
    app.get("/products", async (req, res) => {
      const query = {};
      const { email } = req.query;
      if (email) {
        query.email = email;
      }

      const cursor = productCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // product get id.........
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });

    // create product apis
    app.post("/products", async (req, res) => {
      const product = req.body;
      product.createAt = new Date();

      const result = await productCollection.insertOne(product);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
