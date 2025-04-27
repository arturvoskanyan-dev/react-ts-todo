import { useDispatch, useSelector } from 'react-redux';
import { changeText, add } from '../../store/slices/todoSlice';

const Header = () => {
    const {text} = useSelector((state: any) => state.todoState);
    const dispatch = useDispatch();
    
    const submit = () => {
        if(text.trim()) {
            dispatch(add())
        }
        dispatch(changeText(""))
    }

    return (
        <header className='mb-4'>
            <h1 className='p-2 text-white text-3xl font-black'>ToDo List</h1>
            <form className='flex' onSubmit={(e) => { e.preventDefault();}}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => dispatch(changeText(e.target.value))}
                    className='p-1.5 mr-4 w-full text-white border-2 border-pink rounded-sm'
                />
                <button
                    onClick={submit}
                    className='p-2.5 w-20 bg-light-pink text-white rounded-md cursor-pointer transition-all hover:bg-hover-pink'
                >Add
                </button>
            </form>
        </header>
    )
}

export default Header