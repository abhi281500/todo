import { Todo } from "../models/todo.model.js";

export const createTodo = async (req, res) => {
    try {
        const { title, completed } = req.body;
        const newTodo = new Todo({ title, completed })
        await newTodo.save()
        res
            .status(201)
            .json(newTodo)

    }
    catch (error) {
        res
            .status(400)
            .json({ error: error.message });
    }

}


export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res
            .status(200)
            .json(todos)
    }
    catch (error) {
        res
            .status(500)
            .json({ error: error.message });

    }
}

export const updateTodo = async (req, res) => {

    try {
        const { title, completed } = req.body;
        const { id } = req.params;
        const updated = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        res
            .status(200)
            .json(updated)
    }
    catch (error) {
        res
            .status(400)
            .json({ error: error.message });


    }
}

export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        await Todo.findByIdAndDelete(id)
        res
            .status(200)
            .json({ message: "Deleted successfully" });
    }
    catch (error) {
        res
            .status(400)
            .json({ error: error.message });

    }
}


