import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

import '../styles/style.css';


import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// стили для кнопки 
const BootstrapButton = withStyles({
  root: {
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: '#E9EDF0',
    border: '1px solid',
    borderColor: '#ffffff',
    color: '#215C75',
    width: '321px',
    height: '77px',
    margin: '30px',
    borderRadius: '30px',
    textTransform: 'none',
  },
})(Button);



const Register = ({ handleRegister }) => {
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('')
  const { username, email, password, confirmPassword } = registerData;
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
        .catch((e) => setMessage(e.message))
    }
  }

  return (
    <Container className='container__form-login'>
      <h1>Create an account</h1>
      <p className="register__error">
        {message}
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
              value={username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            <input
              placeholder='Email'
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder='Пароль'
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="confirmPassword">
            <input
              placeholder='Подтвердите пароль'
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleChange}
            />
          </label>
          <div className="register__button-container">
            <BootstrapButton defaultValue='' type="submit">
              Регистрация
            </BootstrapButton>
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
