import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const MainTodo = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);



  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  }
  const handleEdit = (e, id) => {
   let t = todos.filter(i => i.id === id)
   setTodo(t[0].todo)
   let newTodos = todos.filter(item => {
    return item.id !== id;
  });
  setTodos(newTodos);
  }

  const handleDelete = (e , id) => {

let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos);
 
    
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
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

      <div className="container mx-auto my-4 rounded-xl p-5 bg-sky-500 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add Task</h2>
          <input onChange={handleChange} value={todo} type="text" className="w-2/5" />
          <button onClick={handleAdd} className="bg-violet-500 hover:bg-violet-800 p-2 py-1 text-white rounded-md mx-4">Save</button>
        </div>
        <h1 className="text-xl font-semibold">Your todo's</h1>
        <div className="todos">
          {todos.length === 0 && <div className="text-4xl font-semibold text-red-400 my-5">No Task to Display</div>}
          {
            todos.map(item => {
              return <div className="todo flex w-1/4 my-2 justify-between" key={item.id}>
                <div className="flex gap-5 mb-3">
                <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} id=""/>
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                </div>
              
                <div>
                  <button onClick={(e) =>handleEdit(e, item.id)} className="bg-violet-500 hover:bg-violet-800 p-2 py-1 text-white rounded-md mx-1">Edit</button>
                  <button onClick={(e) => handleDelete(e, item.id)} className="bg-violet-500 hover:bg-violet-800 p-2 py-1 text-white rounded-md mx-1">Delete</button>
                </div>
              </div>
            })}
        </div>

      </div>
    </>
  )
}

export default MainTodo
