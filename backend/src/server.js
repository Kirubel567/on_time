import express from "express"; 
import { connectDb } from "./config/db.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";

const app = express(); 
app.use(express.json()); 


connectDb(); 

app.get('/health', (req, res)=>{
    res.send("<h1>your server is connected and working fine</h1>")
}); 

app.use(globalErrorHandler); 
app.listen(process.env.PORT, ()=>{
    console.log(`server listening on port ${process.env.PORT}`); 
})