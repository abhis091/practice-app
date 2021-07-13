import {Fragment, useState} from 'react';

import './App.css';
import AddUser from './components/Forms/AddUser';
import UsersList from './components/User/UsersList';

const InitialUsers = [
  {
    id:'u1',
    username:'Jack',
    age:20
  },
  {
    id:'u2',
    username:'Jill',
    age:25
  }
];

function App() {

  const [userList, setUserList] = useState(InitialUsers);

  const addNewUserHandler = (uname,uAge) => {
      setUserList(prevState => {
        return [
          ...prevState,
          {
            username:uname,
            age:uAge,
            id:Math.random().toString()
          }
        ];
      });
  };

  return (
    <Fragment>
      <AddUser addNewUser = {addNewUserHandler}/>
      <UsersList users={userList}/>
    </Fragment>
  );
}

export default App;
