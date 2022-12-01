import React, { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import SelectHobies from "./SelectHobies";
import "./InputForm.css";
import InputFormItem from "./InputFormItem";

const InputForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredLastname, setEnteredLastName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [error, setError] = useState();
  const [selectedOptions, setSelectedOptions] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredLastname.trim().length === 0 || enteredEmail.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please select a valid input (non empty value)',
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredLastname, enteredEmail, selectedOptions);
    setEnteredUsername('');
    setEnteredLastName('');
    setEnteredEmail('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const lastnameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className="main container ">
      <p className="paragraph row">
        Hello, please enter your information in form.
      </p>
      <div className={"form row d-flex justify-content-center"}>
        <form onSubmit={addUserHandler} className="col-50">
          <InputFormItem
            value={enteredUsername}
            handler={usernameChangeHandler}
            placeholder="username"
          />

          <InputFormItem
            value={enteredLastname}
            handler={lastnameChangeHandler}
            placeholder="Lastname"
          />

          <InputFormItem
            value={enteredEmail}
            handler={emailChangeHandler}
            placeholder="Email"
          />

          <SelectHobies setSelectedOptions={setSelectedOptions} />

          <Button type="submit">Add user</Button>

          {error && (
            <ErrorModal
              title={error.title}
              message={error.message}
              onConfirm={errorHandler}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default InputForm;