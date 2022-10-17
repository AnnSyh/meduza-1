import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
// import * as duckAuth from '../duckAuth.js';
import './styles/Login.css';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Login = ({ handleLogin }) => {
  const [userData, setUserState] = useState({
    username: '',
    password: ''
  });
  const { username, password } = userData
  const [message, setMessage] = useState('')
  function handleChange(e) {
    const { name, value } = e.target;
    setUserState({
      ...userData,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) {
      return;
    }
    handleLogin(username, password)
      .catch((e) => this.setState({ message: e.message }))
  }

  return (

    <Container className='container__form-img container__form-img--left'>
      <div onSubmit={handleSubmit} className="login">

        <p className="login__error">
          {message}
        </p>
        <form className="login__form">
          <label for="username">
            <input id="username"
              required
              placeholder='Логин'
              name="username"
              type="text"
              value={username}
              onChange={handleChange}
            />
          </label>
          <label for="password">
            <input id="password"
              required
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <div className="login__button-container">
            <Button
              variant="contained" 
              color="primary"
              type="submit"
              className="login__link"
            >Войти</Button>
          </div>
        </form>

        <div className="login__signup">
          <p>Ещё не зарегистрированы?</p>
          <Link to="/register" className="signup__link">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </Container >
  )

}

export default Login;
