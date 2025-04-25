import { useState } from 'react'
import { HeaderProps } from '../../types/types';

const Header = ({ handleSubmit }: HeaderProps) => {
    const [text, setText] = useState<string>("");

    const submit = () => {
        if(text.trim()) {
            handleSubmit(text);
        }
        setText("");
    }

    return (
        <header className='mb-4'>
            <h1 className='p-2 text-white text-3xl font-black'>ToDo List</h1>
            <form className='flex' onSubmit={(e) => { e.preventDefault(); submit() }}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
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