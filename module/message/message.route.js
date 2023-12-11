const router=require('express').Router();
const messageValidation=require('./message.validation')
const auth=require('../../middleware/auth')
const validation=require('../../middleware/validation')
const messageController=require('./controller/message.controller')
router.post('/:reciverid',validation(messageValidation.sendMessage),messageController.sendMessage);
router.get('/messages',auth(),messageController.messageList)
router.delete('/:id',auth(),messageController.deleteMessage)
module.exports=router;