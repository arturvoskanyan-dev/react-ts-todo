import { useEffect, useState } from 'react'
import { Todos } from './types/types'
import axios from 'axios'
import { Header, List, Footer } from "./components/index"
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todos[]>([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=15")
      .then((res) => setTodos(res.data))
  }, [])

  const handleSubmit = (title: string) => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        title,
        completed: false
      }
    ])
  }

  return (
    <section className='p-5 w-[550px] bg-dark-brown rounded-md shadow-2xl'>
      <Header handleSubmit={handleSubmit} />
      <List todos={todos} />
      <Footer todos={todos} />
    </section>
  )
}

export default App
