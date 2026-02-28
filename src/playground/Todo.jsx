import React, { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
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

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    if (editText.trim() === "") return;

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo,
      ),
    );
    setEditingId(null);
    setEditText("");
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditText("");
  };

  const date = new Date();
  const dateString = date.toDateString();
  /* const localDateString = date.toLocaleDateString("en-IN"); */

  return (
    <div className=" h-screen flex flex-col justify-start items-center p-6">
      <div className=" w-full max-w-3xl mx-auto text-center space-y-4 py-10">
        {/* title */}
        <h2 className="uppercase tracking-[0.25em] font-extrabold text-5xl text-[#995170]">
          Todo List
        </h2>

        <h3 className="text-gray-500 text-lg tracking-wide">
          Plan it. Plot it.
        </h3>

        <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
          Build your day, task by task. Own your routine, finish strong.
        </p>

        {/* date and day */}
        <div className="flex justify-between items-center gap-3 pt-4 text-gray-600">
          <span className="text-base font-medium">Today</span>
          <span className="text-sm opacity-70">{dateString}</span>
        </div>

        <div className="w-full h-0.5 bg-[#995170] mx-auto mt-4 rounded-full opacity-40"></div>
      </div>
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8 space-y-6">
        {/* input */}
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
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-4 h-4 accent-[#995170] cursor-pointer"
                />

                {editingId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleEdit(todo.id);
                    }}
                    className="flex-1 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#995170]"
                  />
                ) : (
                  <span className={`${todo.completed ? "text-[#4bb543]" : ""}`}>
                    {todo.text}
                  </span>
                )}
              </div>
              <div className="flex gap-3 ml-4">
                {editingId === todo.id ? (
                  <>
                    <button
                      onClick={() => handleSave(todo.id)}
                      className="text-green-500 hover:text-green-700 font-semibold"
                    >
                      <MdOutlineFileDownloadDone size={22} />
                    </button>
                    <button
                      onClick={handleCancel}
                      className="text-red-400 hover:text-red-600"
                    >
                      <MdClose size={22} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(todo)}
                      className="text-blue-500"
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-400 hover:text-red-600 font-bold text-lg transition cursor-pointer"
                    >
                      <IoTrashOutline size={20} />
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
