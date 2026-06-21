import mongoose, { Schema } from "mongoose"

// Todo content belongs to one signed-in user and tracks its status.
const todoSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['completed', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)
export const Todo=mongoose.model("Todo",todoSchema)