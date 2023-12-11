const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passward:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    phone:{
        type:Number
    },
    gender:{
        type:String,
        default:'male',
        enum:['male','female']
    },
    confirmEmail:{
        type:Boolean,
        default:false
    },
    profilePic:{
        type:String
    },
    sendCode:{
        type:String,
        default:null
    }
})

const userModel=mongoose.model('user',userSchema);
module.exports=userModel;