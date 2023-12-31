const mongoose=require('mongoose');

const messageSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    reciverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
   
},{timestamps:true})

const messageModel=mongoose.model('message',messageSchema);
module.exports=messageModel;