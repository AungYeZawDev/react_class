import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [userDetails, setUserDetails] = useState({
    userName: {
      firstName: "John",
      lastName: "Doe",
    },
    age: 20,
    hobby: "Reading",
  });
  const changeName = () => {
    setUserDetails({
      ...userDetails,
      userName: {
        ...userDetails.userName,
        firstName: "Jane",
      },
    });
  };
  return (
    <div>
      <h1>
        Hello {userDetails.userName.firstName} {userDetails.userName.lastName},

      </h1>
      <p>
        {userDetails.age} || {userDetails.hobby}
      </p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );

};

export default App;
