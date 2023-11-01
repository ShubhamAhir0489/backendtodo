const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        text: {
            type: String,
            require: true
        },
        completed: {
            type: Boolean,
            require: true
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("todos", todoSchema);