export type Todos = {
    userId?: number,
    id: number,
    title: string,
    completed: boolean,
}

export type IProps = {
    todos: Todos[]
}

export type TodosStateType = {
    text: string,
    todos: Array<Todos>
}