import { useEffect, useState } from 'react'
import { Todos } from './types/types'
import axios from 'axios'
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todos[]>([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => setTodos(res.data))
  }, [])

  console.log(todos);

  return (
      <section className='p-5 w-[450px] bg-dark-brown rounded-md shadow-2xl'>

      </section>
  )
}

export default App
