import React, { useState } from 'react'
import TodoItem from './components/TodoItem'

const App = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {

    if(input.trim() == "") return

    const newTodo = {
      text: input,
      id: Date.now(),
    }

    setTodos([...todos, newTodo])
    setInput("")
  }

  const deleteTodo = (id) => {
console.log("delete todo chalaa",id)
let returnFilter = todos.filter((todo) => todo.id !== id)
setTodos(returnFilter)
console.log(returnFilter)
  }
  // console.log(todos)
  return (
      <div className="min-h-screen bg-gray-100 dark:bg-[#0f172a] flex items-center justify-center p-4">
      
      <div className="w-full max-w-md bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg p-6">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Todo App
        </h1>

        {/* Input Section */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       dark:bg-[#0f172a] dark:border-gray-700 dark:text-white"
                       value={input}
                       onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo} className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          
        

        {todos.length > 0 ? todos.map((todo) => ( 
          <div key={todo.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-[#0f172a]">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-gray-700 dark:text-gray-200">
                {todo?.text}
              </span>
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-600 text-sm">
              Delete
            </button>
          </div>
        )): "No Items In Todo"}
        

        </div>

      </div>
    </div>
  )
}

export default App