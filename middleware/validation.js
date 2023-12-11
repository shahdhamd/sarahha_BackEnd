const method=['body','params','headers','query'] //key عملنا مصفوفة فيها جميع انواع 
const validation=(schema)=>{ //signUp مثل  validation تمثل الفنكشن الي بدي اعمله  schema 
    return (req,res,next)=>{
        let validationArray=[]; // مصفوفة لتخزين الايرور
        method.forEach(key=>{ //بلف على المصفوفة
            // بتمثل كل عنصر بلف عليه key
            //وهكذا params اللفة الثانية بتكون body اول لفة بتكون 
            if(schema[key]){
                // console.log(key); // signin => body
                const validationResult=  schema[key].validate(req[key],{AbortEarly:false});
                if(validationResult?.error?.details){ //error الها قيمة بضمن انه في detailsو error وvalidationResul لما اضمن انه 
                    validationArray.push(validationResult.error.details)
                }
            }
        })
        if(validationArray.length>0){ // يوجد ايرور
            res.json({message:'validation error',error:validationArray})
        }else{
            next();
        }
        // console.log(schema);
    //    const validationResult=  schema.body.validate(req.body,{AbortEarly:false});
    // //    console.log(validationResult); // فيها بظهر حقل ايرور
    //    if(validationResult.error){
    //     res.json({message:'validation error',error:validationResult.error.details})
    //    }else{
    //     next();
    //    }
    }
}

module.exports=validation;