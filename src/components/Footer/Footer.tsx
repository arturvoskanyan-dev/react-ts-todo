import { TodosItem } from '../../types/types'

const Footer = ({ todos, clearAll }: TodosItem) => {
    const tasks: number | undefined = todos?.filter(d => d.completed).length;

    return (
        <footer className='flex justify-between items-center border-t-2 border-pink'>
            <span className='text-white'>You have {tasks}/{todos?.length} tasks</span>
            {todos?.length && 
            <button 
            onClick={clearAll}
            className='p-2.5 w-20 bg-light-pink text-white rounded-md cursor-pointer transition-all hover:bg-hover-pink'>
                Clear All
            </button>}
        </footer>
    )
}

export default Footer
