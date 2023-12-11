const mongoose=require('mongoose');
mongoose.set('strictQuery', true)
const connectionDB= async()=>{
    return await mongoose.connect(process.env.DBURL)
    .then((result)=>{
        console.log('connection DB')
    }).catch((error)=>{
        console.log('eror catch',error)
    })
}

module.exports=connectionDB;