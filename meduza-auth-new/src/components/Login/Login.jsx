import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import '../scss/style.css';

import Container from '@material-ui/core/Container';

const Login = ({ props, handleLogin }) => {

// console.log('props = ',props)

  const [userData, setUserState] = useState({
    username: 'sssss@ss.ss',
    password: '111',
    message: ''
  });
  const { username, password, message } = userData
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
        .catch((err) => setUserState({ ...userData, message: err.message }))
  }

  return (

    <Container className='container__form-login'>
      <h1>Welcome to My Life Quest</h1>
      <span className='lid'>Please sign-in to your account and start the adventure</span>
      <div onSubmit={handleSubmit} className="login">
        <p className="login__error">
          {message}
        </p>
        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
        <form className="form-img login__form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete='off'
        >
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
            <label htmlFor="remember-me" className='form-img__remember-me'>
              <input type="checkbox" id='remember-me' />
              Remember me
            </label>
            <Link to="/" className="register__login-link">
              Forgot Password?
            </Link>

          </div>

          <div className="login__button-container">
            <button className='big-btn'
            >Login</button>
          </div>
        </form>

        <div className="register__signin">
          <span>New on our platform? </span>
          <Link to="/register" className="register__login-link">
            Create an account
          </Link>
        </div>

        <div className='register__socicons'>
          <Link to="login" className=''>
            {/* <MenuIcon fontSize='large' /> */}
            {/* <svg data-testid="GoogleIcon"></svg> */}
          </Link>

        </div>


      </div>
    </Container >
  )

}

export default Login;
