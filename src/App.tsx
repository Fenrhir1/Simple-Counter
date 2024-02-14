import { useState } from "react";

function App() {
  const [count, setCounter] = useState("Genera Numero");

  function onCLickRandomize() {
    setCounter("" + Math.floor(Math.random() * 100));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onMouseUp={onCLickRandomize}
        style={{
          padding: "10px",
          fontSize: "20px",
          backgroundColor: "lightblue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default App;
