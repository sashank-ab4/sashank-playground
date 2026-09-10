import React from "react";
import { useState } from "react";
import { validation } from "../../Utils/validation";

export default function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validation(username, password);

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Details are Submitted!");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div>
      <h1>SignIn Form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-black p-2"
          />
          {errors && <p className="text-red-400">{errors.username}</p>}

          <label>Password: </label>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-black p-2"
          />
          {errors && <p className="text-red-400">{errors.password}</p>}

          <button className="border rounded-2xl bg-blue-400 p-2">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
