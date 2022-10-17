import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './styles/Register.css';

import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// данные для кнопок (варианты ответов на вопросы)
const BootstrapButton = withStyles({
  root: {
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid green',
    borderColor: '#ffffff',
    color: '#215C75',
    width: '100%',
    margin: '0',
    '&:hover': {
      backgroundColor: '#ffffff',
      borderColor: '#ffffff',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ffffff',
      borderColor: '#ffffff',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
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
    <Container className='container__form-question register'>
      <h1>Регистрация</h1>
      <p className="register__error">
        {message}
      </p>
      <form
        className="form-img register__form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete='off'
      >
        <label for="username">
          <input
            placeholder='Логин'
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label for="email">
          <input
            placeholder='Email'
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label for="password">
          <input
            placeholder='Пароль'
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <label for="confirmPassword">
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
          <Button type="submit" variant="contained" color="primary"  className="register__link">
            Зарегистрироваться
          </Button>
          <BootstrapButton defaultValue='' type="submit" id="age-1" >
              1
            </BootstrapButton>
        </div>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="login" className="register__login-link">Войти</Link>
      </div>
    </Container>
  )
}

export default Register;
