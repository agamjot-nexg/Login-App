const express = require('express');      //Include Express Module
const path = require('path');

const app = express();

const PORT = 9000;            // Constant Port for server is 9000


app.set('view engine', 'ejs');    // Set EJS as view engine

//Load Static Assets
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.use(express.json());          // Set Express JSON Middleware
//home route

app.get('/', (req,res)=>{
    res.render('base', {title: "Login"});
});



app.listen(PORT, ()=>{
    console.log("Server starter on Port :" + PORT);
});    //Declaration of Server Listen
