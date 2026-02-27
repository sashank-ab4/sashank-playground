import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    if (input.trim() === "") return;
    const NEW_TODO = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, NEW_TODO]);
    setInput("");
  };
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const date = new Date();
  const dateString = date.toDateString();
  /* const localDateString = date.toLocaleDateString("en-IN"); */

  return (
    <div className="min-h-screen  bg-linear-to-br from-[#fdfbfb] to-[#ebedee] flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="uppercase tracking-widest font-extrabold text-4xl text-[#995170]">
            Todo List
          </h2>
          <h3 className="text-gray-500">Plan it. Plot it.</h3>
          <p className="text-sm text-gray-400">
            Build your day, task by task. Own your routine, finish strong.
          </p>
        </div>

        {/* Date Section */}
        <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
          <span className="text-lg font-semibold text-gray-700">Today</span>
          <span className="text-gray-500">{dateString}</span>
        </div>

        {/* Input Section */}
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter todo..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#995170] transition"
          />
          <button
            onClick={addTodo}
            className="px-6 py-2 rounded-xl bg-[#995170] text-white font-semibold hover:bg-[#7e3f5b] transition shadow-md"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-4 h-4 accent-[#995170] cursor-pointer"
                />
                <span
                  className={`text-gray-700 ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.text}
                </span>
              </div>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-400 hover:text-red-600 font-bold text-lg transition"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
