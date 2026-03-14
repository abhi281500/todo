import mongoose from "mongoose";


export const connectDb = async () =>{
    try {
       const conn = await  mongoose.connect(process.env.YOUR_CONNECTION_STRING)
       console.log('Database Connected');
       
    } catch (error) {
        console.log("❌ Connection Error Detail:", error.message);
        
    }
}
