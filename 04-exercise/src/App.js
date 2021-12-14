import React, { useState } from 'react';
import UserForm from './components/Users/UserForm';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevState) => {
      return [...prevState, user];
    });
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler}></UserForm>
      {users.length > 0 && <UserList data={users}></UserList>}
    </div>
  );
}

export default App;
