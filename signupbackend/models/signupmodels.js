const mongoose=require('mongoose');
const signuptemp=new mongoose.Schema({
    fullName:{
        type: String,
        require:true
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

});
module.exports=mongoose.model('mytable',signuptemp);