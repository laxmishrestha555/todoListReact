import { useEffect, useState } from 'react'
import { TodoProvider } from './todocontext/TodoContext'
import './App.css'
import { TodoForm } from './components/TodoForm/TodoForm'
import { TodoItem } from './components/TodoItem/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev, {id:Date.now(), ...todo}])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? todo : prevTodo))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id !==id))
  }

  const toogleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  // useEffect(()=>{
  // const storedTodos= JSON.parse(localStorage.getItem("todos"))

  // if (storedTodos) {
  //   setTodos(storedTodos)
  // }
  // },[])


  // useEffect(()=>{
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // },
  // [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toogleComplete }}>

      

      <div className='bg-blue-900 w-96 flex flex-col m-4 justify-center items-center mx-auto max-w-2xl rounded-xl' >
        
        <div className="flex flex-col m-4 text-white ">

          <h1 className="text-2xl font-bold  mb-8 mt-2">Add any task</h1>

        </div>
      <div className="mb-4 content-center">
        <TodoForm />
      </div>

      <div className="flex flex-wrap gap-y-3 items-center justify-center ">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      
      </div>
      
      
    </TodoProvider>
  );
}

export default App
