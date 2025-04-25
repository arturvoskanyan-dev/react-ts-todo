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
    remove?: (id: number | undefined) => void,
    changeCompleted?: (id: number | undefined, completed: boolean) => void,
    clearAll?: () => void
}