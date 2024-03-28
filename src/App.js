import React, { useState } from "react";

import "./App.css";

import Header from "./Header";

const App = () => {

  console.log("Rendering Form");

  const [name, setName] = useState("");

  return (

    <div className="App">

      <Header title="Input Field" />

      <input

        type="text"

        value={name}

        onChange={(e) => setName(e.target.value)}
      />

    </div>

  );

};

export default App;