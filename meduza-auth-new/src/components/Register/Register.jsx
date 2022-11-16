import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import '../scss/style.css';


import Container from '@material-ui/core/Container';


const Register = ({ handleRegister }) => {

  const {
    register,
    // handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { actions, state } = useStateMachine({ updateAction });

  console.log('handleRegister = ', handleRegister);

  const [registerData, setRegisterData] = useState({
    username: state.data.name,
    email: state.data.email,
    password: state.data.password,
    confirmPassword: state.data.password,
    message: ''
  });

  const { username,  password, email, confirmPassword, message } = registerData;
  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      handleRegister(username, password, email)
      .catch((err) => setRegisterData({...registerData,  message: err.message }))
    }
  }

  return (
    <Container className='container__form-login'>
      <h1>Create an account</h1>

      {/* <p>handleRegister = {handleRegister}</p> */}
        <pre>{JSON.stringify(state, null, 2)}</pre>
      <p className="register__error">
      register__error:
      { message }
      </p>
      
      <div className="login">
        <form
          className="form-img register__form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete='off'
        >
          <label htmlFor="username">
            <input
              placeholder='Логин'
              id="username"
              name="username"
              type="text"
              defaultValue={state.data.name}
              // value={username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            <input
              placeholder='Email'
              id="email"
              name="email"
              type="email"
              defaultValue={state.data.email}
              // value={email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder='Пароль'
              id="password"
              name="password"
              type="password"
              defaultValue={state.data.password}
              // value={password}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="confirmPassword">
            <input
              placeholder='Подтвердите пароль'
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              defaultValue={state.data.password}
              // value={confirmPassword}
              onChange={handleChange}
            />
          </label>
          <div className="register__button-container">
            <button className='big-btn' defaultValue='' type="submit">
              Регистрация
            </button>
          </div>
        </form>
        <div className="register__signin">
          <span>Уже зарегистрированы? </span>
          <Link to="login" className="register__login-link">Войти</Link>
        </div>
      </div>
    </Container>
  )
}

export default Register;
