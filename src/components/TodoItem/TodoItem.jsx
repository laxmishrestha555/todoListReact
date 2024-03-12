import React, { useState } from 'react'
import './TodoItem.css'
import { useTodo } from '../../todocontext/TodoContext'


export function TodoItem({todo}) {
    
    const[editable, setEditable]= useState(false)
    const[todoMsg, SetTodoMsg]=useState(todo.todo)

    const{updateTodo,deleteTodo,toogleComplete}=useTodo()

    const editTodo=()=>{
        updateTodo(todo.id, {...todo, todo: todoMsg})
        SetTodoMsg()
    }

    const toogleCompleted=()=>{
        toogleComplete(todo.id)
    }

    return (
        <div className='wrapperitem '>

            <div className='bg-black border-2 border-blue-800 text-white mx-2 rounded-md ' >
            <input type="checkbox"
            className='cursor-pointer'
             checked={todo.completed}
             onChange={toogleCompleted}
             />

            <input type="text" 
            className={`bg-black  mx-2  border-none  ${editable ? "border-white  border-dotted px-2": "border-transparent"} ${todo.completed ? "line-through" : ""}`}
             value={todoMsg} 
             onChange={(e)=>SetTodoMsg(e.target.value)}
             readOnly={!editable}
            />

            <button className='btn ' onClick={()=>{
                if (todo.completed) return;

                if(editable){
                    editTodo();
                } else{
                    setEditable((prev)=>!prev)
                }
            
            }}
            disabled={todo.completed}
            >
                {editable ? "📁" : "✏️"}
                
                </button>
            <button className='btn ' onClick={()=>deleteTodo(todo.id)}>❌</button>
            </div>
        </div>
    )
}
