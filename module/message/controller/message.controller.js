const messageModel = require("../../../DB/model/message.model");
const userModel = require("../../../DB/model/user.model");

const sendMessage= async(req,res)=>{
    let {reciverid}=req.params;
    let {message}=req.body;
        // بدي اخزن الداتا في قاعدة البيانات
    const user=await userModel.findById(reciverid);
    if(!user){ // بدي اتاكد انه في يوزر عنده هاد الاي دي
        res.json({message:'receiver not found'})
    }else{
        const newMessage=new messageModel({text:message,reciverid})
        const saveMessage=await newMessage.save();
        res.json({message:'sucess',saveMessage})
   }
}

const messageList=async(req,res)=>{
    const message=await messageModel.find({reciverid:req.user._id}); 
    //auth بدي الرسائل الي الاي دي تبعها زي الاي دي الجاي من فنكشن 
    res.json({message:'sucess',message})
}

const deleteMessage=async(req,res)=>{
    const {id}=req.params; // message id
    const userId=req.user._id;
    const message= await messageModel.findOneAndDelete({_id:id,reciverid:userId})
    if(!message){
        res.json({message:'invalid delete message'})
    }else{
        res.json({message:'sucess'});
    }
}
module.exports={sendMessage,messageList,deleteMessage};