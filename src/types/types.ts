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

export type HeaderProps = {
    handleSubmit: (title: string) => void
}

export type ListProps = {
    todos?: Todos[],
    changeCompleted: (id: number, completed: boolean) => void,
    editTitle: (id: number, newTitle: string) => void,
    remove: (id: number) => void,
}

export type FooterProps = {
    todos: Todos[],
    clearAll: () => void
}