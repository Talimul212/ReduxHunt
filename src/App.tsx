import {
  decrement,
  increment,
} from "./Components/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./Components/hook/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state?.counter);
  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <div></div>

      <div>
        <button
          onClick={() => handleIncrement(5)}
          style={{ marginRight: "20px" }}
        >
          Increment by 5
        </button>
        <button
          onClick={() => handleIncrement(1)}
          style={{ marginRight: "20px" }}
        >
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
