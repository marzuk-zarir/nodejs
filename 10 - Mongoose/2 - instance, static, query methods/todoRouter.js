const express = require('express')
const { model } = require('mongoose')
const TodoSchema = require('./TodoSchema')

const todoRouter = express.Router()
const TodoModel = new model('todo', TodoSchema)

todoRouter.post('/', (req, res) => {
    const newTodo = new TodoModel(req.body)
    newTodo
        .save()
        .then(() => res.json(newTodo))
        .catch(() => res.status(500).json({ error: 'Internal server error' }))
})

todoRouter.get('/complete', (req, res) => {
    const todo = new TodoModel()
    todo.completedTodo().then((completedTodo) => {
        res.json(completedTodo)
    })
})

todoRouter.get('/incomplete', (req, res) => {
    TodoModel.inCompletedTodo().then((inCompletedTodo) => {
        res.json(inCompletedTodo)
    })
})

todoRouter.get('/filter', (req, res) => {
    TodoModel.find()
        .byName(req.query.name)
        .then((todos) => {
            res.json(todos)
        })
})

module.exports = todoRouter
