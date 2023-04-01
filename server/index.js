const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose");

const app = express();

mongoose.set('strictQuery', true);
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    dbName: "ExpenseManager",
}).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
});

//route
app.use('api/v1/users',require('./routes/userRoute'))

app.use(express.json());

app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening to port ${process.env.PORT}`);
});