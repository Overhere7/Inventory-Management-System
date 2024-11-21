const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const connectToMongoDB = require("./db.js");
app.use(express.json());
app.use(cors());
const productRoute = require("./routes/productRoute.js")
app.use("/",productRoute)
app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on ${PORT}`);
})


