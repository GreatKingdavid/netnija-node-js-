const express = require("express");

//set up an express add
const app = express();

app.set('view engine', 'ejs')

//listen for requests
app.listen(3000);

// responds to browser request
app.get("/", (req, res) => {
  res.sendFile("./view/index.html", {root: __dirname});
})

app.get("/about", (req, res) => {
  res.sendFile("./view/about.html", {root: __dirname});
});

// redirect
app.get("/about-me", (req, res)=>{
    res.redirect('/about');
})

//404 page
app.use((req,res)=>{
    res.status(404).sendFile("./view/404.html", {root: __dirname});
})


