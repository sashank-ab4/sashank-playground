import { useState } from "react";
export default function MyTodo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodos = () => {
    if (input.trim() === "") return;
    const NEW_TODOS = {
      id: Date.now(), // can also write todos.length + 1
      value: input,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, NEW_TODOS]);
    setInput("");
  };

  const toggleTodos = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodos = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>My Todo App!</h2>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="p-2 border"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodos} className="bg-green-300 p-2 rounded-md">
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                className="mr-1"
                onChange={() => toggleTodos(todo.id)}
              />
              <span className={todo.completed ? "text-green-400" : ""}>
                {todo.value}
              </span>
              <button
                onClick={() => deleteTodos(todo.id)}
                className="text-red-500 ml-2 border "
              >
                Delete
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
