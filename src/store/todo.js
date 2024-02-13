import { createSlice } from "@reduxjs/toolkit";

const initialState={AllTodo:[]}

const todoSlice=createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        addTodo(state,action){
            state.AllTodo=[...state.AllTodo,action.payload]
        },
        deleteTodo(state,action){
            console.log(action.payload)
            const itemAfterRemoval=state.AllTodo.filter((current)=>current.id!=action.payload)
            console.log(itemAfterRemoval)
            state.AllTodo=itemAfterRemoval
        }
    }
})
const todoSliceReducer=todoSlice.reducer;
export const todoSliceActions=todoSlice.actions
export default todoSliceReducer