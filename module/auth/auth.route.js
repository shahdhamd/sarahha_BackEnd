const router=require('express').Router();
const authController=require('./controller/auth.controller');
router.post('/signip',validation(authController.signin),authController.signip);
const validation = require('../../middleware/validation');

const validationController=require('./auth.validation')
router.get('/signup',validation(validationController.signup),authController.signup)

router.get('/confirmEmail/:token',authController.confirmEmail)

router.get('/:id',(req,res)=>{
    res.json('auth module')
})
router.get('/sendCode',authController.sendCode)
router.get('/forgetPassward',authController.forgetPassward)

module.exports=router;