const express = require("express");

//set up an express add
const app = express();

app.set('view engine', 'ejs')

//listen for requests
app.listen(3000);

// responds to browser request
app.get("/", (req, res) => {
  res.render('index');
})

app.get("/about", (req, res) => {
  res.render('about');
});


app.get("/blogs/create", (req, res)=>{
    res.render('create');
})

//404 page
app.use((req,res)=>{
    res.status(404).render('404');
})


