const mongoose = require('mongoose');
const connectToMongoDB = ()=>{
    mongoose.connect(process.env.URL)
.then(()=>console.log("MongoDB Is Connected Successfully"))
.catch((err)=>console.log(err));

}
module.exports= connectToMongoDB;