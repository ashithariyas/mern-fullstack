const express=require('express');
const router=express.Router();
const signuptempcopy=require('../models/signupmodels')

router.post('/signup',(request,response)=>{
    
    const signupuser=new signuptempcopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    signupuser.save()
    .then(data=>{
        response.json(data);
    })
    .catch(error=>{
        response.json(error)
    })


})

    


module.exports=router;