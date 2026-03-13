import mongoose from "mongoose";
import morgan from "morgan";
import  cors from 'cors'
import express from 'express'

const app = express();

app.use(cors()); 
app.use(morgan('dev')); 
app.use(express.json());

const port =3000

app.listen(port,()=>{
    console.log(`http://localhost ${port}`);
    
})