import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
} from "./Components/redux/features/counter/counterSlice";
import { useAppSelector } from "./Components/hook/hook";

function App() {
  const dispatch = useDispatch();
  const { count } = useAppSelector((state) => state?.counter);
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
