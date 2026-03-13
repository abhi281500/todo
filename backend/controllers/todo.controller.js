import { todo } from "../models/todo.model";
import express from express


const app = express();

app.post('/todos',express.json(),async (req,res)=>{
    const {title , completed} =req.body;
    const newTodo = newTodo({
        title,completed
    })
    await newTodo.save()
    res.send('todo added')
})


app.get('/todos',express.json(),async (req,res)=>{
    await 
    res.send('todo added')
})

app.put('/todos',express.json(),async (req,res)=>{
    await 
    res.send('todo added')
})

app.delete('/todos',express.json(),async (req,res)=>{
    await 
    res.send('todo added')
})


