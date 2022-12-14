import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import CardList from './CardList.jsx';

import '../scss/style.css';
import InfoBar from '../InfoBar/InfoBar';
import TopBar from '../TopBar/TopBar';

function Cards() {
  return (
    <div className='personal-area 111'>
      <TopBar />
      <NavBar />
      <div className='personal-area__content 111'>
        <div className="top-bar__content">
          <InfoBar />
          <CardList />
        </div>
      </div>
    </div>
  )
}

export default Cards;