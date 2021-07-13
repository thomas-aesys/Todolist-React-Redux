import { createSlice } from "@reduxjs/toolkit";


export const TodoSlice = createSlice({
    name: 'todolist',
    initialState: { todo: [] },
    reducers: {
        add: (state, action) => {
            console.log("ciao ", action)
            state.todo.push(action.payload)
        },
        del: (state, action) => {
            state.todo.splice(action.payload, 1)
        }
    }
})


export const { add, del } = TodoSlice.actions

export default TodoSlice.reducer