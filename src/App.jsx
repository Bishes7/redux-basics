import { useState } from "react";

import "./App.css";
import Display from "./Display";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Display count={count} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>
    </>
  );
}

export default App;
