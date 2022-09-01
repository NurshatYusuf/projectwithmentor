import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [file, setFile] = useState();
  const navigate = useNavigate();
  function handleChange(e) {
    console.log(e.target.value);
    setFile(e.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <h1>Props:</h1>
      <img src={file} alt="" />
    </div>
  );
}

export default App;
