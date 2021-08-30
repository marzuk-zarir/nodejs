const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: {
        type: Date,
        default: Date.now
    },
    done: {
        type: Boolean,
        default: false
    }
})

TodoSchema.methods.completedTodo = function () {
    return mongoose.model('todo').find({ done: true })
}

TodoSchema.statics.inCompletedTodo = function () {
    return this.find({ done: false })
}

TodoSchema.query.byName = function (name) {
    return this.find({ name })
}

module.exports = TodoSchema
