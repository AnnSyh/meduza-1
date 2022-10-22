import React from 'react';
import Card from './Card.jsx';
import data from '../../data.js';
import '../scss/style.css';

function cardList() {
  let { cards } = data;
  return (

    <div className="cards__list-wrapper">
      <h1>My Journey</h1>
      <div className="cards__list">
        {
          cards.map((card) => {
            return (
              <Card card={card} key={card.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default cardList;