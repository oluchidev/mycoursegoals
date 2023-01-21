import React, {useState} from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([])

  const onAddUsersHandler = (uName, uAge) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        {name:uName, age: uAge, id: Math.random().toString()}
      ]
    })
  }

  return (
    <div>
    <AddUsers onAddUser={onAddUsersHandler}/>
    <UsersList Users={usersList}/>
    </div>
  )
}

export default App;
