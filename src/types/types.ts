export type Todos = {
    userId?: number,
    id?: number,
    title?: string,
    completed?: boolean,
}

export type TodosItem = {
    todos?: Todos[],
    id?: number,
    title?: string,
    completed?: boolean
}