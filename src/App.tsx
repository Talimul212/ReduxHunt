import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
} from "./Components/redux/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state?.counter);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <div></div>

      <div>
        <button onClick={handleIncrement} style={{ marginRight: "20px" }}>
          Increment
        </button>
        {count}
        <button onClick={handleDecrement} style={{ marginLeft: "20px" }}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
