import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const Todo = () => {
const [input, setInput] = useState("")
const [todos, setTodos] = useState([])
const [editTodo, setEditTodo] = useState(null)


 const toastHandler = (message) => {
  toast(message)
 }

const addTodoHandler = () => {
  
  if(!input.trim()){
    return toastHandler("Please Enter a Task!")
  }

  if(todos){
    let returnItem = todos.find((todoItem) => todoItem.title.includes(input))

    if(returnItem){
      return toastHandler("This item already exist!")
    }

  }

  if(editTodo){
const updateTodos = todos.map((todo) => todo.id == editTodo ? {...todo, title:input}: todo)
setTodos(updateTodos)
setEditTodo(null)
setInput("")
return 
  }

  
  const todoItem = {
    title : input,
    id : Date.now()
  }

  setTodos(prev => [...prev, todoItem])
  setInput("")
}

const deleteTodoHandler = (id) => {
const filteredItem = todos.filter((todo) => todo.id !== id)
setTodos(filteredItem)
}

const editTodoHandler = (id) => {

  const editTodoItem = todos.find((todo) => todo.id == id)
  setEditTodo(editTodoItem.id)
  setInput(editTodoItem.title)
}

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
          value={input}
            type="text"
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       dark:bg-[#0f172a] dark:border-gray-700 dark:text-white"
                       onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodoHandler} className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
            {editTodo ? "Update" : "Add"}
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          
        

        {todos.length > 0 ? todos.map((todo) => ( 
          <div key={todo.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-[#0f172a]">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-gray-700 dark:text-gray-200">
                {todo?.title}
              </span>
            </div>
            <div className='gap-5 flex'>
              <button onClick={() => editTodoHandler(todo.id)} className="text-red-500 hover:text-red-600 text-sm cursor-pointer">
              Edit
            </button>
            <button onClick={() => deleteTodoHandler(todo.id)} className="text-red-500 cursor-pointer hover:text-red-600 text-sm">
              Delete
            </button>
            </div>
          </div>
        )): <p className="text-gray-500 text-center">No todos yet 🚀</p>}
        

        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default Todo