const express = require("express");

//set up an express add
const app = express();

//listen for requests
app.listen("3000");

// responds to browser request
app.get("/", (req, res) => {
    res.send('<p> this is the home page </p>');
});
