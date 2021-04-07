const express = require('express')

const router = express.Router();

 const credentials = {
    email: "admin@gmail.com",
    password: 'admin123'
 }

//login user
router.post('/login', (req,res)=>{
    if(req.body.email == credentials.email){
        req.session.user == req.body.email;
        // res.redirect('/dashboard')
        res.end("Login Success!")
    }else{
        res.end("Invalid Username or Password!")
    }
})

module.exports = router;