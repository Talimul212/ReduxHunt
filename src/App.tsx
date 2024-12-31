import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>

      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        {count}
        <button onClick={() => setCount((count) => count + 1)}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
