import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosStateType, Todos } from "../../types/types";
import { getTodos, changeCompleted, postTodos, editList } from "./todoAPI";

const initialState: TodosStateType = {
    todos: [],
    text: ""
}

const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        changeText(state, action: PayloadAction<string>) {
            state.text = action.payload;
        },
        remove(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        clearAll(state) {
            state.todos = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
            })
            .addCase(postTodos.fulfilled, (state, action: PayloadAction<Todos>) => {
                state.todos = [...state.todos, { id: Date.now(), title: action.payload.title, completed: false }]
            })
            .addCase(changeCompleted.fulfilled, (state, action: PayloadAction<{id:number, completed:boolean}>) => {
                state.todos = state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
            })
            .addCase(editList.fulfilled, (state, action: PayloadAction<{id:number, title:string}>) => {   
                state.todos = state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            title: action.payload.title
                        }
                    }
                    return todo
                })
            })
    },
})

export const { changeText, remove, clearAll } = todoSlice.actions;
export default todoSlice.reducer;