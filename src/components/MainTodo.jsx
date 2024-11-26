import React from 'react'

const MainTodo = () => {
  return (
    <div className="container mx-auto my-4 rounded-xl p-5 bg-sky-500 min-h-[80vh]:">
      <div className="addTodo my-5">
        <h2 className="text-lg font-bold">Add Task</h2>
        <input type="text" className="w-2/5"/>
        <button className="bg-violet-500 hover:bg-violet-800 p-2 py-1 text-white rounded-md mx-4">Add</button>
      </div>
    <h1 className="text-xl font-semibold">Your Todo's</h1>
      <div className="todos">
      <div className="todo flex">
        <div className="text">
Lorem ipsum dolor sit amet.
        </div>
        <div>
          <button className="bg-violet-500 hover:bg-violet-800 p-2 py-1 text-white rounded-md mx-1">Edit</button>
          <button className="bg-violet-500 hover:bg-violet-800 p-2 py-1 text-white rounded-md mx-1">Delete</button>
        </div>
      </div>
        
      </div>
     
  </div>
  )
}

export default MainTodo
