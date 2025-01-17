const mongoose=require('mongoose');
const dotenv=require('dotenv').config();

const ConnectDB=async()=>{
   await mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });
    ``
    

}

module.exports=ConnectDB;