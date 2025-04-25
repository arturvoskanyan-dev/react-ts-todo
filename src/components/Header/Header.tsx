import { useState } from 'react'

const Header = () => {
    const [text, setText] = useState<string>("");

    return (
        <header className='mb-4'>
            <article>
                <h1 className='p-2 text-white text-3xl font-black'>ToDo List</h1>
            </article>
            <form className='flex' onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='p-1.5 mr-4 w-full text-white border-2 border-pink rounded-sm'
                />
                <button className='p-2.5 w-20 bg-light-pink text-white rounded-md cursor-pointer transition-all hover:bg-hover-pink'>Add</button>
            </form>
        </header>
    )
}

export default Header