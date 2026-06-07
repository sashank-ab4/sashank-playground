import { useState } from "react";

useState;
export default function DataListExp() {
  const [fruit, setFruit] = useState("");
  const fruits = ["Apple", "Banana", "Custard Apple", "Dates", "Fig", "Grapes"];
  return (
    <div>
      <h1>DataList in React</h1>
      <label htmlFor="fruit">Choose a Fruit:</label>
      <input
        list="fruits"
        id="fruit"
        name="fruit"
        placeholder="Type or Select"
        value={fruit}
        onChange={(e) => setFruit(e.target.value)}
      />
      <datalist id="fruits">
        {fruits.map((item, index) => (
          <option value={item} key={index} />
        ))}
      </datalist>
      <p>Selected Fruit: {fruit}</p>
    </div>
  );
}
