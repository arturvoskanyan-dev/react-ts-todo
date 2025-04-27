import { Header, List, Footer } from "./components/index"
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { useEffect } from "react";
import { getTodosAPI } from "./store/slices/todoAPI";
import './App.css'

function App() {
  const {todos} = useAppSelector((state) => state.todoState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodosAPI())
  }, [])

  return (
    <section className='p-5 w-[550px] bg-dark-brown rounded-md shadow-2xl'>
      <Header />
      <List todos={todos} />
      <Footer todos={todos} />
    </section>
  )
}

export default App
