import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Register.css';

const Register = ({ handleRegister }) => {
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [ message, setMessage ] = useState('')
  const { username, email, password, confirmPassword } = registerData;
  function handleChange(e) {
    const {name, value} = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    if (password === confirmPassword){
      handleRegister(username, password, email)
          .catch((e) => setMessage(e.message))
    }
  }

    return(
      <div className="register">
        <p className="register__error">
          {message}
        </p>
        <form onSubmit={handleSubmit} className="register__form">
          <label for="username">
            Логин:
          </label>
          <input 
              id="username" 
              name="username" 
              type="text" 
              value={username} 
              onChange={handleChange} 
            />
          <label for="email">
            Email:
          </label>
          <input 
              id="email" 
              name="email" 
              type="email" 
              value={email} 
              onChange={handleChange} 
          />
          <label for="password">
            Пароль:
          </label>
          <input 
              id="password" 
              name="password" 
              type="password" 
              value={password} 
              onChange={handleChange} 
          />
          <label for="confirmPassword">
            Подтвердите пароль:
          </label>
          <input 
              id="confirmPassword" 
              name="confirmPassword" 
              type="password" 
              value={confirmPassword} 
              onChange={handleChange} 
          />
          <div className="register__button-container">
            <button type="submit" className="register__link">Зарегистрироваться</button>
          </div>
        </form>
        <div className="register__signin">
          <p>Уже зарегистрированы?</p>
          <Link to="login" className="register__login-link">Войти</Link>
        </div>
      </div>
    )
}

export default Register;
