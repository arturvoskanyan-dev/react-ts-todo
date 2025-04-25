import { TodosItem } from "../../types/types"
import ListItem from "../ListItem/ListItem"

const List = ({todos} : TodosItem) => { 
    return (
        <section>
            <ul className='max-h-[450px] overflow-y-scroll list'>
                {
                    todos?.map((todo) => {
                        return (
                            <ListItem
                                id={todo.id}
                                key={todo.id}
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