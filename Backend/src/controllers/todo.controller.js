import { Todo } from "../models/todo.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create a todo for the signed-in user.
const createTodo=asyncHandler(async(req,res)=>{
    const {content}=req.body
    if(!content?.trim()){
        throw new ApiError(400,"Content is required")
    }
    const todo=await Todo.create({
        content,
        createdBy:req?.user?.id
    })
    if(!todo){
        throw new ApiError(500,"Something went wrong while creating the todo")
    }
    return res.status(201).json(
        new ApiResponse(200,todo,'Todo Created Successfully')
    )
})
const updateTodo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { content, status } = req.body;

    const todo = await Todo.findByIdAndUpdate(
        id,{content,status},
        { new: true , runValidators:true}
    );
    if (!todo) {
        throw new ApiError(404,"Todo not found");
    }
    return res.status(200).json(
        new ApiResponse(200, todo,"Todo updated successfully")
    );
});

// Delete only if the todo belongs to the active user.
const deleteTodo=asyncHandler(async(req,res)=>{
    const {id}=req.params
    const todo=await Todo.findById(id)
    if(!todo){
        throw new ApiError(404,'Todo not found')
    }
    if(todo.createdBy!==req?.user?.id){
        throw new ApiError(403,"You are not allowed to update This Todo")
    }
    const deletedTodo=await Todo.findByIdAndDelete(id)
    if(!deletedTodo){
        throw new ApiError(404,"Todo not found")
    }
    return res.status(200).json(
        new ApiResponse(200,deletedTodo,"Todo Deleted")
    )
})

// Fetch the current user's todo list.
const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find({
        createdBy: req?.user?.id
    });
    return res.status(200).json(
        new ApiResponse(200, todos, "Todos fetched successfully")
    );
});
export {
    createTodo,
    updateTodo,
    deleteTodo,
    getTodos
}