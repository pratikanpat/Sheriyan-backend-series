const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.json());//blob
app.use(express.urlencoded({extended : true}));//blob
app.use(express.static(path.join (__dirname, "public")));  //ejs static files access from the public folder setup
app.set('view engine', "ejs"); //ejs setup

app.get("/", function(req, res){
    res.render("index");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});