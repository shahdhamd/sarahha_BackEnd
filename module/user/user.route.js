const router=require('express').Router();
const auth=require('../../middleware/auth');
const { myMulter, HME } = require('../../services/multer');

const userController=require('./controller/user.controller');
router.patch('/updatePassward',auth(),userController)// بدي اعدل اشي واحد
router.get('/',auth(),(req,res)=>{
        let user=req.user;
        res.json({message:'welcome',user});
})

router.patch('/profile/pic',auth(),myMulter(['image/jpeg','image/png']).single('image'),HME,userController.uploadProfilePic)
//profilepic بدي اعدل حقل 
// single احدد كم صورة بدي ارفع
// image ==> الاسم الي رح استقبله من اليوزر 
module.exports=router;





