const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./Config/db.js");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Contact web is working fine");
});

// user route
app.use("/api/users", require("./Routes/UserRoutes"));

// contact route
app.use("/api/contact", require("./Routes/ContactRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})




