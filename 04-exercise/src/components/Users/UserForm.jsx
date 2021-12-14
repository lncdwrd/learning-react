import React, { useState } from 'react';
import ErrorModal from '../Templates/ErrorModal';
import Section from '../Templates/Section';
import Button from '../Templates/Button';
import classes from './UserForm.module.css';

const User = (props) => {
  const [valid, setValidity] = useState({
    username: false,
    age: false,
  });
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    validateForm();

    if (valid.username === true && valid.age === true) {
      const data = {
        id: Math.random().toString(),
        username,
        age,
      };

      props.onAddUser(data);

      resetForm();
    }
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const resetForm = () => {
    setUsername('');
    setAge('');
  };

  const validateField = (e) => {
    const regex = {
      name: /^[a-zA-Z0-9]+$/i,
    };

    if (e.target.id === 'username') {
      if (regex.name.test(e.target.value)) {
        setValidity((prevState) => {
          return { ...prevState, username: true };
        });
      } else {
        setValidity((prevState) => {
          return { ...prevState, username: false };
        });
      }
    }

    if (e.target.id === 'age') {
      if (e.target.value > 0) {
        setValidity((prevState) => {
          return { ...prevState, age: true };
        });
      } else {
        setValidity((prevState) => {
          return { ...prevState, age: false };
        });
      }
    }
  };

  const validateForm = () => {
    if (valid.username === false) {
      setError({
        title: 'Invalid username',
        message: 'Please use letters and numbers only.',
      });
    }

    if (valid.age === false) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age.',
      });
    }

    if (username.trim().length === 0) {
      setError({
        title: `Invalid username`,
        message: `Username cannot be blank.`,
      });
    }

    if (age.trim().length === 0) {
      setError({
        title: `Invalid age`,
        message: `Age cannot be blank.`,
      });
    }

    if (username.trim().length === 0 && age.trim().length === 0) {
      setError({
        title: `Invalid username and age`,
        message: `Name and age cannot be blank.`,
      });
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        ></ErrorModal>
      )}

      <Section className={classes.input}>
        <form action="" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onBlur={validateField}
              onChange={usernameHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              value={age}
              onBlur={validateField}
              onChange={ageHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Section>
    </div>
  );
};

export default User;
