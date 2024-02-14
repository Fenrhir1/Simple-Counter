import { useState } from "react";

function App() {
  const [count, setCounter] = useState<any>("Genera Numero");

  function onCLickRandomize() {
    setCounter(Math.floor(Math.random() * 100));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
      }}
    >
      <button
        onClick={onCLickRandomize}
        style={{
          padding: "10px",
          fontSize: "20px",
          backgroundColor: "lightblue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100px",
          height: "100px",
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default App;
