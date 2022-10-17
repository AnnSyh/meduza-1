import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles/NavBar.css';


function NavBar () {
  const history = useHistory();
  function signOut(){
    localStorage.removeItem('jwt');
    history.push('/register');
  }
  return (
    <div className="navbar">
      <ul className="navbar__nav">
        <li><Link to="cards" className="navbar__link">Карточки</Link></li>
        <li><Link to="my-profile" className="navbar__link">Мой профиль</Link></li>
        <li><button onClick={signOut} className="navbar__link navbar__button">Выйти</button></li>
      </ul>
    </div>
  )
}

export default NavBar;