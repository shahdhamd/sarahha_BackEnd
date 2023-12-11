const userModel = require("../../../DB/model/user.model");
var bcrypt = require('bcryptjs');
const updatePassward=async(req,res)=>{
    const {oldPassware,newPassward}=req.body;
    try{
        const user=await userModel.findById(req.user._id); // بجيب معلومات اليوزر الي بعتلي التوكن تبعه
        const match=bcrypt.compare(oldPassware,user.passward)
        if(!match){
            res.json({message:'old passward invalid'})
        }else{
            const passhas=await bcrypt.hash(newPassward,parseInt(process.env.SaltRound))
            const updateUser=await userModel.findByIdAndUpdate(req.user._id,{passward:newPassward})
        }
        if(!updatePassward){
            req.json({message:'fail update passward'})
        }else{
            res.json({message:'sucess update'})
        }
    }catch(error){
        res.json('catch error ',error)
    }
   
}

const uploadProfilePic=async(req,res)=>{
    const imageUrl=req.file.destination + '/'+ req.file.filename
    res.statuts(200).json({message:req.file})    //بعد ما رفعت الصورة بعطيني معلومات عنها 

}
module.exports={updatePassward,uploadProfilePic};