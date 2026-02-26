const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./modules/blog");

//set up an express add
const app = express();

const dbURI = "mongodb+srv://Major_David:code2002042@nodejsblog.h1byyjb.mongodb.net/?appName=NinjaBlog";

mongoose.connect(dbURI)
  .then(result => app.listen(3000))
  .catch(err => console.log(err));


app.set("view engine", "ejs");



//middelware and static files
app.use(express.static("Public"));

app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: "A new Blog",
    snippet: "About my new Blog",
    body: "More about the new Blog",
  });

  blog.save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

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
