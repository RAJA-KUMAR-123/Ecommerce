const cors = require("cors");
const express = require("express");
const app = express();
const http = require('http');
require('./connection');
require('dotenv').config();
const stripe = require("stripe").Stripe('sk_test_51LDieuSFsYZrBdhyeluqTchK0Kk4gFFgEvxvY5Ofq8g8GRarfxmFJGd3oUn1BPONiN3BMwKyfkdmYK74bfborB8r00jaP6q36c');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server ,{
    cors:'http://localhost:3000',
    methods:['GET', 'POST', 'PATCH', "DELETE"]
})





const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');
const productRoute = require('./routes/productRoute');
const orderRoutes = require('./routes/orderRoutes');
const imageRoutes = require('./routes/imageRoutes');



app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users',userRoutes);
app.use('/orders',orderRoutes);
app.use('/products',productRoute);
app.use('/images',imageRoutes);





app.post('/create-payment', async(req, res)=> {
    const {amount} = req.body;
    console.log(amount);
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: ['card']
      });
      res.status(200).json(paymentIntent)
    } catch (e) {
      console.log(e.message);
      res.status(400).json(e.message);
     }
  })
  



server.listen(4000,()=>{
    console.log("server is running at port",4000)
})

app.set('socketio', io);