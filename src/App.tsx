import { Header, List, Footer } from "./components/index"
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const {todos} = useSelector((state: any) => state.todoState);

  return (
    <section className='p-5 w-[550px] bg-dark-brown rounded-md shadow-2xl'>
      <Header />
      <List todos={todos} />
      <Footer todos={todos} />
    </section>
  )
}

export default App
