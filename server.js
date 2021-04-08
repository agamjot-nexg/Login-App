const express = require('express');      //Include Express Module
const path = require('path');
const session = require('express-session');
const {v4:uuidv4} = require('uuid');
const router = require('./router')
const app = express();

const PORT = 9000;            // Constant Port for server is 9000


app.set('view engine', 'ejs');    // Set EJS as view engine

//Load Static Assets
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))
app.use(session({
    secret: uuidv4(),
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());          // Set Express JSON Middleware
app.use(express.urlencoded({extended: true}))

app.use('/route', router);
//home route
app.get('/', (req,res)=>{
    res.render('base', {tite: "Login"});
});



app.listen(PORT, ()=>{
    console.log("Server starter on Port:" + PORT);
});    //Declaration of Server Listen
