const express = require("express");
const dotenv = require("dotenv")
const connectDB = require("./config/db.js");
const User = require("./models/User.js");

// load envirnoment varaibles
dotenv.config();

connectDB();

const app = express();

// allow request from frontends
app.use(express.json());

// default route
app.get("/",(req,res)=>{
    res.send("app is running")
})

//User route
app.use("/api/users", require("./Routes/userRoutes.js"));

// start server

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});



