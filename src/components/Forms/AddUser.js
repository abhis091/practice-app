import { Fragment, useState, useRef } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";

const AddUser = (props) => {

  const unameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (+ageInputRef < 1) {
      setError({
        header : "Age Invalid",
        content : "Age cannot be negative or zero"
      });
      return;
    }else{
      props.addNewUser(unameInputRef.current.value, ageInputRef.current.value);
    }
    unameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError('');
  };

  return (
    <Fragment>
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
            ref = {unameInputRef}
          />
          <label className="form-control__label" htmlFor="age">
            Age (in years)
          </label>
          <input
            required
            className="form-control__input"
            type="number"
            ref = {ageInputRef}
          />
          <button className="form-control__submit" type="submit">
            Add User
          </button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
