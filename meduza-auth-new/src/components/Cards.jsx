import React from 'react';
import NavBar from './NavBar.jsx';
import CardList from './CardList.jsx';

// import classes from './styles/Cards.module.css';
import './styles/personal-area.css';
import './styles/Card.css';
import InfoBar from './InfoBar.jsx';
import TopBar from './TopBar.jsx';

function Cards() {
  return (
    <div className='personal-area'>
      <TopBar />
      <NavBar />
      <div className='personal-area__content'>
        <div className="top-bar__content">
          <InfoBar />
          <CardList />
        </div>
      </div>
    </div>
  )
}

export default Cards;