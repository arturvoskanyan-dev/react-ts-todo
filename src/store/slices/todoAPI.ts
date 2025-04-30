import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const getTodos = createAsyncThunk(
    "get/todo",
    async() => {
        const response = await API.getTodos()
        return response.data;
    }
)

export const postTodos = createAsyncThunk(
    "post/todo",
    async(title:string) => {
        const response = await API.postTodo(title)
        return response.data;
    }
)

export const changeCompleted = createAsyncThunk(
    "patch/completed",
    async({id, completed}: {id: number, completed: boolean}) => {
        const response = await API.changeCompleted(id, completed);
        return response.data;
    }
)

export const editList = createAsyncThunk(
    "patch/title",
    async({id, title}: {id: number, title: string}) => {
        const response = await API.editList(id, title);
        return response.data;
    }
)

export const remove = createAsyncThunk(
    "delete/todo",
    async(id:number) => {
        const response = await API.remove(id);
        return response.data;
    }
)