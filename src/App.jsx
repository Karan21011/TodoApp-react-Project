import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputdata, setInputData] = React.useState("");
  const [item, setItem] = useState([]);
  const [msg, setMsg] = useState("No Todos");

  const addItem = () => {
    if (!inputdata) {
      alert("Enter Todo Name");
    } else {
      setItem([...item, inputdata]);
      setInputData("");
      setMsg("");
    }};

  const deleteItem = (id) => {
    const updateditem = item.filter((elem, ind) => {
      return ind !== id;
    });
    setItem(updateditem);
  };

  return (
    <>
      <div className="main">
        <h1>ToDo App</h1>
        <div className="inputbox">
          <input
            type="text"
            value={inputdata}
            placeholder="Type Here . ."
            onChange={(e) => setInputData(e.target.value)}
          />
          <button onClick={addItem}>Add</button>
        </div>
        <h1>{msg}</h1>

        {/* -------------------down div here----------------- */}

        {item.map((items, ind) => (
          <>
            <div className="downdiv" key={item.items}>
              <h4>{items}</h4>

              <div className="btn">
                <button onClick={() => deleteItem(ind)}>Del</button>
                <button>Edit</button>
               
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
export default App;

