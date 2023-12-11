var jwt = require('jsonwebtoken');
const userModel = require('../DB/model/user.model');

const auth= ()=>{
    return async  (req,res,next)=>{
        const {token}=req.headers;
        try{
            if(!token.startsWith(process.env.authBearerToken)){
                res.json({message:'invalid baearer token'})
            }else{
                const x=token.split(process.env.authBearerToken)[1];
                // افصل التوكن لعند كلمة السر وخد العنصر الثاني
                const decoded=await jwt.verify(x,process.env.LoginToken);
                // // لازم اشيل كلمة السر بعدين افك تشفيرها
                const user=await userModel.findOne({_id:decoded._id}); 
                req.user=user;  // بتخزن الداتا تبع اليوزر في ريكوست دوت يوز
                next();
            }
        }catch(error){
            res.json(error)
        }
}}
module.exports=auth;




