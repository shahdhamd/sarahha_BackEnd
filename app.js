const  express = require('express')
require('dotenv').config()
const app = express()
const port = 4000
app.use(express.json());
const indexRouter=require('./module/index.route')
const connectDB=require('./DB/connection')
connectDB();
app.use(`${process.env.BASEURL}/upload`,express.static('./upload'))
app.use(`${process.env.BASEURL}/user`,indexRouter.userRouter);
app.use(`${process.env.BASEURL}/message`,indexRouter.messageRouter);
app.use(`${process.env.BASEURL}/auth`,indexRouter.authRouter);
app.use('*',(req,res)=>{
    res.json({message:'page not found'})
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))