import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

const API = {
    getTodos() {
        return instance.get("/todos?_limit=15")
    },

    postTodo(title: string) {
        return instance.post("/todos", {title, completed: false})
    },

    changeCompleted(id: number, completed: boolean) {
        return instance.patch(`/todos/${id}`, {completed: !completed})
    },

    editList(id: number, title: string) {
        return instance.patch(`/todos/${id}`, {title})
    },

    remove(id:number) {
        return instance.delete(`/todos/${id}`)
    }
}

export default API;