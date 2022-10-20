import React from 'react';
import Card from './Card.jsx';
import data from '../data.js';
import './styles/CardList.css';

function cardList () {
  let { cards } = data;
  return (
    <div className="cards__list">
      {
        cards.map((card) => {
          return (
            <Card card={card} key={card.id} />
          )
        })
      }
    </div>
  )
}

export default cardList;