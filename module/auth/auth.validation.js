const Joi = require('joi');

const signup=async(req,res)=>{
    body:Joi.object().required().keys({ //body لازم الكي بكون جاي من  
        email:Joi.string().email().required().messages({'any.required':'plz send your name'}),
        name:Joi.string().min(3).max(15).required(),
        passward:Joi.string().required(),
        passwardc:Joi.string().valid(joi.ref('passward')).required() //passward بمعنى لازم تكون نفس 
    })
}

const signin=async(req,res)=>{
    body:Joi.object().required().keys({ 
        email:joi.string().email().messages({'any.required':'plz send your name'}),
        passward:joi.string().required(),
    })
}

module.exports={signup,signin};