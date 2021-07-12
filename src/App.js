import './App.css';
import AddUser from './components/Forms/AddUser';
import Users from './components/User/Users';

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
  return (
    <div>
      <AddUser/>
      <ul>
        <Users users={InitialUsers}/>
      </ul>
    </div>
  );
}

export default App;
