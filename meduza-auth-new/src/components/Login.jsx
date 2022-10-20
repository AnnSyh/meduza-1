import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
// import * as duckAuth from '../duckAuth.js';
import './styles/Login.css';

import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
    // '&:hover': {
    //   backgroundColor: '#ffffff',
    //   borderColor: '#ffffff',
    // },
    // '&:active': {
    //   backgroundColor: '#ffffff',
    //   borderColor: '#ffffff',
    // },
    // '&:focus': {
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    // },
  },
})(Button);

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

    <Container className='container__form-login'>
      <h1>Welcome to My Life Quest</h1>
      <span className='lid'>Please sign-in to your account and start the adventure</span>
      <div onSubmit={handleSubmit} className="login">
        <p className="login__error">
          {message}
        </p>
        <form className="form-img login__form">
          <label htmlFor="username">
            <input id="username"
              required
              placeholder='Email'
              name="username"
              type="text"
              value={username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <input id="password"
              required
              placeholder='Password'
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <div className='form-img__row'>
            <label  htmlFor="remember-me" className='form-img__remember-me'>
              <input type="checkbox" id='remember-me'/>
              Remember me
            </label>
            <Link to="/" className="register__login-link">
              Forgot Password?
            </Link>

          </div>

          <div className="login__button-container">
            <BootstrapButton
              type="submit"
            >Login</BootstrapButton>
          </div>
        </form>

        <div className="register__signin">
          <span>New on our platform? </span>
          <Link to="/register" className="register__login-link">
            Create an account
          </Link>
        </div>
      </div>
    </Container >
  )

}

export default Login;
