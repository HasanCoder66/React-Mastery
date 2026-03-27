import React from 'react'

const TodoItem = ({data, deleteTodo}) => {
  console.log(data)
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-[#0f172a]">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-gray-700 dark:text-gray-200">
                {data?.text}
              </span>
            </div>
            <button onClick={deleteTodo} className="text-red-500 hover:text-red-600 text-sm">
              Delete
            </button>
          </div>
  )
}

export default TodoItem