export type Todos = {
    userId?: number,
    id: number,
    title: string,
    completed: boolean,
}

export type TodosItem = {
    id: number,
    title: string,
    completed: boolean,
}

export type ListProps = {
    todos?: Todos[],
}

export type FooterProps = {
    todos: Todos[]
}

export type TodosStateType = {
    text: string,
    todos: Array<TodosItem>
}