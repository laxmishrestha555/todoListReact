import React, { useState } from "react";
import { useTodo } from "../../todocontext/TodoContext";
// import './TodoForm.css'

export function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });

    setTodo("");
  };

  return (
    <div className="flex items-center justify-center text-white ">
      <form onSubmit={add} className="flex  items-center  ">
        <input
          type="text"
          placeholder=""
          id="text"
          className="bg-blue-900 outline-none p-1 border-2 border-black"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black hover:bg-white  hover:text-black text-white border-2 p-1 border-black "
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
