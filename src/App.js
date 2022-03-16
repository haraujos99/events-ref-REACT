import { useRef, useEffect } from "react";
import "./styles.css";

function App() {
  const countRef = useRef(0);
  const incrementRef = useRef(null);
  const incrementLet = useRef(null);

  let count = 0;

  console.log("Renderizou");
  console.log(countRef.current, "countRef");
  console.log(count, "count");

  const handleCountRef = () => {
    countRef.current += 1;
    console.log("Valor de countRef", countRef.current);
  };

  const handleCount = () => {
    count += 1;
    console.log("Valor de count", count);
  };

  return (
    <div className="App">
      <button ref={incrementRef} onClick={() => handleCountRef()}>
        Increment ref
      </button>
      <button ref={incrementLet} onClick={() => handleCount()}>
        Increment let
      </button>
    </div>
  );
}

export default App;
