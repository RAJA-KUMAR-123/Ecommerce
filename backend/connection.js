require('dotenv').config();
const mongoose = require('mongoose');
const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.qp4ev.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(connectionStr,{useNewUrlParser: true})
.then(()=>console.log(" mongo db is connected ")).catch(err=> console.log(err));

mongoose.connection.on('error',err =>{
    console.log(err)
})



//8yPwuLMVbSZ1NB3b
// Ecommerce 