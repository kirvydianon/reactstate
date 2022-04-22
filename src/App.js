import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [todo, setTodo] = useState({
    id: Math.random() * 1000,
    completed: false,
    text: "Asdasd",
  });

  const add = () => {
    setCount((prev) => prev + 1);
  };

  const subtract = () => {
    setCount((prev) => prev - 1);
  };
  console.log(name);
  return (
    <div>
      <button onClick={subtract}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <h2>{todo.id}</h2>
        <h2>{todo.text}</h2>
      </div>
    </div>
  );
}

export default App;
