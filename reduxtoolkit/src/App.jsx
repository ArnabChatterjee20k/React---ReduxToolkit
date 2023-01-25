import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./features/counter/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
