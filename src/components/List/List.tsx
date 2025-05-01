import { IProps } from "../../types/types"
import ListItem from "../ListItem/ListItem"

const List = ({todos} : IProps) => { 
    return (
        <section>
            <ul className='max-h-[450px] overflow-y-scroll list'>
                {
                    todos?.map((todo) => {
                        return (
                            <ListItem
                                id={todo.id}
                                key={todo.id}
                                todos={todos}
                                title={todo.title}
                                completed={todo.completed}
                            />
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default List