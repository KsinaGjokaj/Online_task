import React, { useState } from 'react';
import InputForm from './components/Form/InputForm';
import UsersList from './components/Form/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);
 

  const addUserHandler = (uName, uLastName, uEmail, uSelect) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { username: uName, lastname: uLastName, email: uEmail, select: uSelect, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <InputForm onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
