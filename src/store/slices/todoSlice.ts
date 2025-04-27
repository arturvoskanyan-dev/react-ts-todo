import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosStateType } from "../../types/types";
import { getTodosAPI } from "./todoAPI";

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
        add(state) {
            state.todos = [...state.todos, { id: Date.now(), title: state.text, completed: false }]
        },
        changeCompleted(state, action: PayloadAction<number>) {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        },
        editTitle(state, action: PayloadAction<{id: number, newTitle: string}>) {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        title: action.payload.newTitle
                    }
                }
                return todo
            })
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
          .addCase(getTodosAPI.fulfilled, (state, action) => {
            state.todos = action.payload;
          })
    },
})

export const { changeText, add, changeCompleted, editTitle, remove, clearAll } = todoSlice.actions;
export default todoSlice.reducer;