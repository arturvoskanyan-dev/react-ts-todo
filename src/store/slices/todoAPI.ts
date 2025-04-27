import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Todos } from "../../types/types";

export const getTodosAPI = createAsyncThunk(
    "get/todo",
    async() => {
        const response = await axios.get<Todos[]>("https://jsonplaceholder.typicode.com/todos?_limit=15")
        return response.data;
    }
)