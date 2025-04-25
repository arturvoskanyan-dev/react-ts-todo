export type HeaderProps = {
    handleSubmit: (title: string) => void
}

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
    completed?: boolean,
    changeCompleted?: (id: number | undefined, completed: boolean) => void,
    editTitle?: (id: number | undefined, newTitle: string | undefined) => void,
    remove?: (id: number | undefined) => void,
    clearAll?: () => void
}