import { useState } from "react";

function App() {
  const [count, setCounter] = useState(0);

  function onCLickAdd() {
    setCounter(count + 1);
  }

  function onCLickDim() {
    setCounter(count - 1);
  }

  return (
    <div>
      <button
        onMouseUp={onCLickAdd}
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
        Aggiungi
      </button>
      <p style={{ fontSize: "20px", color: count < 0 ? "red" : "black" }}>
        {count}
      </p>
      <button
        onMouseUp={onCLickDim}
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
        Diminuisci
      </button>
    </div>
  );
}

export default App;
