const express = require("express");

//set up an express add
const app = express();

app.set("view engine", "ejs");

//listen for requests
app.listen(3000);

// responds to browser request
app.get("/", (req, res) => {
  const blogs = [
    {title: 'David is him', snippet: 'lpojksd poijdfsp onips wjndiop jopiwjdf opwndf'},
    {title: 'David is him', snippet: 'lpojksd poijdfsp onips wjndiop jopiwjdf opwndf'},
    {title: 'David is him', snippet: 'lpojksd poijdfsp onips wjndiop jopiwjdf opwndf'},
  ]
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
