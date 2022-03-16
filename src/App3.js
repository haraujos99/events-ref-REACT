import { useRef } from "react";
import "./styles.css";

function App3() {
  const danielRef = useRef(null);
  const joaoRef = useRef(null);
  const pedroRef = useRef(null);

  const vermelho30 = () => {
    danielRef.current.style.color = "red";
    danielRef.current.style.fontSize = "30px";
  };

  const verde60 = () => {
    joaoRef.current.style.color = "green";
    joaoRef.current.style.fontSize = "60px";
  };

  const azul90 = () => {
    pedroRef.current.style.color = "blue";
    pedroRef.current.style.fontSize = "90px";
  };

  return (
    <div className="App">
      <strong ref={danielRef} onClick={() => vermelho30()}>
        Daniel
      </strong>
      <strong ref={joaoRef} onClick={() => verde60()}>
        João
      </strong>
      <strong ref={pedroRef} onClick={() => azul90()}>
        Pedro
      </strong>
    </div>
  );
}

export default App3;
