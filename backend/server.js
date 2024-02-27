const express=require("express");
const mongoose=require("mongoose");
const thoughtRoutes=require("./routes/thought.js")
const cors=require("cors")

require("dotenv").config()

const app = express();
app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{next()})

app.use('/api/thoughts',thoughtRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/passingThoughts')
.then(()=>{
    console.log("connected to the database")
    app.listen(process.env.PORT,()=>{
        console.log(`listening on port ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("unable to connect " ,err)
})
   

