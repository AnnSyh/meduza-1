import React from 'react';
import './styles/Card.css';

function Card (props) {
  let { card }  = props;
  return (
    <div className="card-card">
      <div className="card-card__image">
        <img className="card-card__png" src={card.img} />
      </div>
      <div className="card-card__desc">
        <p className="card-card__name">
          {card.name}
        </p>
        <p className="card-card__text">
          {card.description}
        </p>
      </div>
    </div>
  )
}

export default Card;