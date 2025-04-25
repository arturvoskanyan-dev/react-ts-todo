import { TodosItem } from "../../types/types"
import ListItem from "../ListItem/ListItem"

const List = ({todos, remove, changeCompleted, editTitle} : TodosItem) => { 
    return (
        <section>
            <ul className='max-h-[450px] overflow-y-scroll list'>
                {
                    todos?.map((todo) => {
                        return (
                            <ListItem
                                id={todo.id}
                                key={todo.id}
                                remove={remove}
                                title={todo.title}
                                editTitle={editTitle}
                                completed={todo.completed}
                                changeCompleted={changeCompleted}
                            />
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default List