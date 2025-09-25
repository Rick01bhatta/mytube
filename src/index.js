import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("error: ",error)
        throw error;
    })
    app.listen(process.env.Port || 3000,()=>{
        console.log(`Server is running at port: ${process.env.Port}`);
        
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed", err)
})