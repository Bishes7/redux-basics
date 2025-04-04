import { useState } from "react";

import "./App.css";
import Display from "./Display";
import { useDispatch } from "react-redux";
import { increase } from "./counterSlice";

function App() {
  const [count, setCount] = useState(0);

  // Updating the state
  const dispatch = useDispatch();

  const incr = () => {
    dispatch(increase());
  };

  return (
    <>
      <Display count={count} />
      <div className="card">
        <button onClick={incr}>+</button>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>
    </>
  );
}

export default App;
