const express = require("express");
const mongoose = require("mongoose");

//set up an express add
const app = express();



const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://Major_David:code2002042@nodejsblog.h1byyjb.mongodb.net/?appName=NodejsBlog";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.set("view engine", "ejs");

//listen for requests
app.listen(3000);

//middelware and static files
app.use(express.static("Public"));

// responds to browser request
app.use((req, res, next) => {
  console.log(`new request made`);
  console.log(`host:`, req.hostname);
  console.log(`path:`, req.path);
  console.log(`method:`, req.method);
  next();
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "David is him",
      snippet: "lpojksd poijdfsp onips wjndiop jopiwjdf opwndf",
    },
    {
      title: "David is him",
      snippet: "lpojksd poijdfsp onips wjndiop jopiwjdf opwndf",
    },
    {
      title: "David is him",
      snippet: "lpojksd poijdfsp onips wjndiop jopiwjdf opwndf",
    },
  ];
  res.render("index", { title: "home", blogs: blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create" });
});

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
