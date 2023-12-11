const Joi = require('joi');

const sendMessage={
    body:Joi.object().required().keys({
        message:Joi.string().required().min(4).max(400)
    }),
    params:Joi.object().required().keys({
        reciverid:Joi.string().min(24).max(24).required()
    })
}

module.exports=sendMessage;