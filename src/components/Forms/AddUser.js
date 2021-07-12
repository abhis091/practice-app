
import {useState} from 'react';
import Card from "../UI/Card";
import "./AddUser.css";

const AddUser = (props) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if(+age<1){
        return;
    }

    console.log(username+" "+age);
    setAge('');
    setUsername('');
  };

  const setUsernameHandler = event => {
    setUsername(event.target.value);
  };

  const setAgeHandler = event => {
    setAge(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label className="form-control__label" htmlFor="username">
          Username
        </label>
        <input required className="form-control__input" type="text" value={username} onChange={setUsernameHandler}/>
        <label className="form-control__label" htmlFor="age">
          Age (in years)
        </label>
        <input required className="form-control__input" type="number" value={age} onChange={setAgeHandler}/>
        <button className="form-control__submit" type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default AddUser;
