import React, { useEffect, useState } from "react";
import {
  addTodo,
  fetchTodo,
  removeTodo,
  updateTodo,
} from "../services/userServices";
import { useNavigate } from "react-router-dom";

function ToDo() {
  const Navigate=useNavigate()
  const [todos, setTodos] = useState([
    {
      creationDate: "",
      isComplete: "",
      taskName: "",
    },
  ]);
  const [newTodo, setNewTodo] = useState("");
  useEffect(() => {
    fetchTodo()
      .then((res) => {
        setTodos(res.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [todos]);
  const handleSubmit = () => {
    const todoData = { todo: newTodo };
    setTodos([...todos, { taskName: newTodo }]);
    addTodo(todoData);
    setNewTodo("");
  };

  const remove = (index) => {
    removeTodo(index);
  };
  const toggleComplete = (index) => {
    updateTodo({ taskID: index });
    setTodos([...todos]);
  };

  function handleLogout(e){
    e.preventDefault();
    localStorage.removeItem('user');
    Navigate('/')

  }
  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow flex flex-col">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white"
      >
        Logout
      </button>
      <h2 className="text-xl font-semibold mb-4 ">Todo List</h2>
      <div className="mb-2 block">
        <input
          type="text"
          className="border rounded py-2 px-3 w-full mb-2"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded float-right"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      <div className="mt-2 ">
        <h2 className="text-lg font-bold text-green-800">Incomplete Tasks</h2>
        <ul>
          {todos
            .filter((item) => item.isComplete === false)
            .map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b py-2"
              >
                <form>
                  <input
                    type="checkbox"
                    name={todo.taskName}
                    id={todo._id}
                    value={todo.taskName}
                    onChange={() => toggleComplete(todo._id)}
                  />
                  {todo.taskName}
                </form>
                <div>
                  <button
                    className="text-red-500 text-xs"
                    onClick={() => remove(todo._id)}
                  >
                    Remove
                  </button>{" "}
                </div>
              </li>
            ))}
          {todos.length === 0 && (
            <span className="text-gray-500">No tasks to display</span>
          )}
        </ul>
        <h2 className="text-lg font-bold text-green-800">Completed Tasks</h2>
        <ul>
          {todos
            .filter((item) => item.isComplete === true)
            .map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b py-2"
              >
                {todo.taskName}

                <div>
                  <button
                    className="text-red-500 text-xs"
                    onClick={() => remove(todo._id)}
                  >
                    Remove
                  </button>{" "}
                </div>
              </li>
            ))}
          {todos.length === 0 && (
            <span className="text-gray-500">No tasks to display</span>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
