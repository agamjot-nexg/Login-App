const { response } = require('express');
const express = require('express')

const router = express.Router();

 const credentials = {
    email: "admin@gmail.com",
    password: 'admin123'
 }

//login user
router.post('/login', (req,res)=>{
    if(req.body.email == credentials.email){
        req.session.user === req.body.email;
        res.redirect('/route/dashboard')
        // res.end("Login Success!")
    }else{
        res.end("Invalid Username or Password!")
    }
})

//route for dashboard
router.get('/dashboard', (req,res)=>{
    // if(req.session.user){
    //     res.render('dashboard');
    // }else{
    //     res.send("Unauthorized User!")
    // }
    res.render('dashboard');
})

//route for logout

router.get('/logout', (req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            response.send("error")
        }else{
            res.render('base', {title:"Express", logout:"Logged Out Successfully"})
        }
    })
})

module.exports = router;