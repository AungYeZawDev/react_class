import { useState } from "react";

const App = () => {

  const [count, setCounter] = useState(0);

  return (

    <>

      <button onClick={() => setCounter(count + 1)}> Increment by 1 </button> <br /><br />

      <button onClick={() => setCounter(count - 1)}> Decrement by 1 </button> <br /><br />

      <h2>{count}</h2>

    </>

  );

};

export default App;