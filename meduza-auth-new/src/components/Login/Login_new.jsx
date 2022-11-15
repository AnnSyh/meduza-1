import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, } from 'react-router-dom';
import '../scss/style.css';
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";
import * as auth from '../../auth';

import Container from '@material-ui/core/Container';

const Login = ({ props, handleLogin }) => {
// const Login = (props) => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (data) => {
    actions.updateAction(data);
    props.history.push("./ready-see-rezalts");
    // alert(JSON.stringify(data));
    reset();
  };
  const { actions, state } = useStateMachine({ updateAction });


  const [userData, setUserState] = useState({
    username: state.data.name,
    password: state.data.password
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
    auth.authorize(username, password)
    .then((data) => {
      if (data.jwt){
        this.setUserState({username: state.data.name, password: state.data.password} ,() => {
          this.props.handleLogin();
          this.props.history.push('/cards');
        })
      }  
    })
    .catch((e) => this.setUserState({ message: e.message }))
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
              // onSubmit={handleSubmit(onSubmit)}
              noValidate
              autoComplete='off'
        >
          <label htmlFor="username">
            <input id="username"
              required
              placeholder='Email'
              name="username"
              type="text"
              // defaultValue={state.data.email}
              // {...register("email", {
              //   required: 'Required field',
              //   pattern: {
              //     value: /^[A-zА-яЁё]+$/,
              //     message: "Entered value does not match email format"
              //   }
              // })}              
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
              // defaultValue={state.data.password}
              // {...register("password", {
              //   required: 'Required field',
              //   pattern: {
              //     value: /^[A-zА-яЁё]+$/,
              //     message: "Entered value does not match password format"
              //   } 
              // })}              
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
