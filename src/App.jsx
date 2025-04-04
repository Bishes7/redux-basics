import "./App.css";
import Display from "./Display";
import { useDispatch } from "react-redux";
import { decrease, increase } from "./counterSlice";

function App() {
  // Updating the state
  const dispatch = useDispatch();

  const incr = () => {
    dispatch(increase());
  };

  const decr = () => {
    dispatch(decrease());
  };

  return (
    <>
      <Display />
      <div className="card">
        <button onClick={incr}>+</button>
        <button onClick={decr}>-</button>
      </div>
    </>
  );
}

export default App;
