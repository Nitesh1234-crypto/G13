import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';
const initialState={
    todos:[]
}
let todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({id:uuidv4(),title:action.payload})
        },
        deleteTodo:(state,action)=>{
            state.todos= state.todos.filter((todo)=>todo.id!=action.payload)
        }
    }
})
export let {addTodo,deleteTodo}=todoSlice.actions;
export default todoSlice.reducer;