import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
import morgan from "morgan";
import  cors from 'cors'
import express from 'express'
import { connectDb } from "./config/db.js";
import todoRoutes from './routes/todo.route.js'

const app = express();

app.use(cors()); 
app.use(morgan('dev')); 
app.use(express.json());


app.use('/api/v1/todos', todoRoutes);

const port = process.env.PORT || 3000;
connectDb().then(() => {
    app.listen(port, () => {
        console.log(` Server is running at http://localhost:${port}`);
    });
});





