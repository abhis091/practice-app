import { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (+age < 1) {
      setError({
        header : "Age Invalid",
        content : "Age cannot be negative or zero"
      });
      setAge("");
    setUsername("");
      return;
    }

    console.log(username + " " + age);
    props.addNewUser(username, age);
    setAge("");
    setUsername("");
  };

  const setUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const setAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError();
  };

  return (
    <div>
      { error && <ErrorModal headerData={error.header} contentData={error.content} errorHandler = {errorHandler}/>}
      <Card>
        <form onSubmit={addUserHandler}>
          <label className="form-control__label" htmlFor="username">
            Username
          </label>
          <input
            required
            className="form-control__input"
            type="text"
            value={username}
            onChange={setUsernameHandler}
          />
          <label className="form-control__label" htmlFor="age">
            Age (in years)
          </label>
          <input
            required
            className="form-control__input"
            type="number"
            value={age}
            onChange={setAgeHandler}
          />
          <button className="form-control__submit" type="submit">
            Add User
          </button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
