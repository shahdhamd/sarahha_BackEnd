const { func } = require('joi');
const multer  = require('multer')
const {nanoid}=require('nanoid');

const HME=(error,req,res,next)=>{ // الترتيب مهم
    if(error){
        res.status(400).json({message:'multer error',error});
    }else{
        next();
    }
}
const multerValidation=async(req,res)=>{
    image:[['image/jpeg','image/png']];
    pdf:['application/pdf']
}
function myMulter(customvalidation){ // customvalidation عبارة عن اريه

    const storage=multer.diskStorage({
        // destination:function(req,file,cb){
        //     cb(null,"upload/profile")
        // },
        // filename:function(req,file,cb){
        //     cb(null,Date.now()+'_'+nanoid()+'_'+file.originalname)
        // }
    })
    function fileFilter(req,file,cb){
        if(customvalidation.includes(file.mimetype)){
            cb(null,true);  // true => ضيفها
        }else{
            cb('invalid file type',false);
        }
    }
    const upload=multer({dest:'upload',fileFilter,storage});
    return upload;
}

module.exports={myMulter,HME};