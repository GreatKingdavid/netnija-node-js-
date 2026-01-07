const express = require("express");

//set up an express add
const app = express();

const dbURI = "mongodb+srv://major:code2002@nodejsblog.h1byyjb.mongodb.net/?appName=NodejsBlog"

app.set("view engine", "ejs");

//listen for requests
app.listen(3000);

//middelware and static files
app.use(express.static('Public'))

// responds to browser request
app.use((req, res, next)=>{
  console.log(`new request made`);
  console.log(`host:`, req.hostname);
  console.log(`path:`, req.path);
  console.log(`method:`, req.method);
  next()
})


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
