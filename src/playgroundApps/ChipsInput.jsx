import React from "react";
import { useState } from "react";

export default function ChipsInput() {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setChips((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  const handleClear = (index) => {
    const copyOfChips = [...chips];
    copyOfChips.splice(index, 1);
    setChips(copyOfChips);
  };
  return (
    <div>
      <h2>Chips Input!</h2>
      <div>
        <input
          value={inputValue}
          type="text"
          placeholder="Enter a keyword.."
          className="p-2 border border-blue-300"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <div>
          {chips.map((chip, index) => (
            <div
              className=" border w-max p-1 rounded-2xl pr-3 m-1.5"
              key={index}
            >
              {chip}
              <button
                onClick={() => handleClear(index)}
                className="text-red-500 ml-2"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
