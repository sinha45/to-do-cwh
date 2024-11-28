import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const MainTodo = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  }
  const handleEdit = () => {

  }

  const handleDelete = () => {

  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) =>{
let id = e.target.name;
let index = todos.findIndex(item => {
  return item.id === id;
})
let newTodos = [...todos];
newTodos[index].isCompleted = !newTodos[index].isCompleted;
setTodos(newTodos);
  }

  return (
    <>
    
    <div className="container mx-auto my-4 rounded-xl p-5 bg-sky-500 min-h-[80vh]:">
      <div className="addTodo my-5">
        <h2 className="text-lg font-bold">Add Task</h2>
        <input onChange={handleChange} value={todo} type="text" className="w-2/5" />
        <button onClick={handleAdd} className="bg-violet-500 hover:bg-violet-800 p-2 py-1 text-white rounded-md mx-4">Add</button>
      </div>
      <h1 className="text-xl font-semibold">Your todo's</h1>
      <div className="todos">
        {
          todos.map(item => {
            return <div className="todo flex w-1/4 my-3 justify-between"  key={item.id}>
              <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} id="" />
              <div className={item.isCompleted ? "line-through" : ""}>
                {item.todo}
              </div>
              <div>
                <button onClick={handleEdit} className="bg-violet-500 hover:bg-violet-800 p-2 py-1 text-white rounded-md mx-1">Edit</button>
                <button onClick={handleDelete} className="bg-violet-500 hover:bg-violet-800 p-2 py-1 text-white rounded-md mx-1">Delete</button>
              </div>
            </div>
          })}
      </div>

    </div>
    </>
  )
}

export default MainTodo
