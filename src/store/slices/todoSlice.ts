import { createSlice } from "@reduxjs/toolkit";
import { TodosStateType } from "../../types/types";

const initialState: TodosStateType = {
    todos: [],
    text: ""
}

const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        getTodos(state, action) {
            state.todos = action.payload
        },
        changeText(state, action) {
            state.text = action.payload;
        },
        add(state) {
            state.todos = [...state.todos, { id: Date.now(), title: state.text, completed: false }]
        },
        changeCompleted(state, action) {
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
        editTitle(state, action) {
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
        remove(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        clearAll(state) {
            state.todos = [];
        }
    }
})

export const { getTodos, changeText, add, changeCompleted, editTitle, remove, clearAll } = todoSlice.actions;
export default todoSlice.reducer;