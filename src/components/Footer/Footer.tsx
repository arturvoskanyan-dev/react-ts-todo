import { IProps } from '../../types/types'
import { clearAll } from '../../store/slices/todoSlice';
import { useAppDispatch } from '../../store/hooks';

const Footer = ({ todos }: IProps) => {
    const tasks: number = todos?.filter(d => d.completed).length;
    const dispatch = useAppDispatch();

    return (
        <footer className='flex justify-between items-center border-t-2 border-pink'>
            <span className='text-white'>You have {tasks}/{todos?.length} tasks</span>
            {todos?.length > 0 &&
                <button
                    onClick={() => dispatch(clearAll())}
                    className='p-2.5 w-20 bg-light-pink text-white rounded-md cursor-pointer transition-all hover:bg-hover-pink'>
                    Clear All
                </button>}
        </footer>
    )
}

export default Footer
