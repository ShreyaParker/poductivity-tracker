const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors");
const {activityRouter} = require("./routes/activityRoute");

const app= express();

require("dotenv").config()

const PORT =process.env.PORT

const MONGO_URI = process.env.MONGODB_URI

app.use(express.json());
app.use(cors())
app.use("/api",activityRouter);

app.get("/",(req,res)=>{
    res.send("hello world")
})

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
})
    .then(()=> {
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`)
        })

    })
    .catch((err)=> console.log(err))

if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}