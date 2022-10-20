import React from 'react';
import './styles/Card.css';

function Card (props) {
  let { card }  = props;
  return (
    <div className="cards__item">
      <div className="cards__pic">
        <img className="cards__img" src={card.img} alt=''/>
      </div>
      <div className="cards__desc">
        <p className="cards__name">
          {card.name}
        </p>
        <p className="cards__text">
          {card.description}
        </p>
      </div>
      {/* <div className="card-card__desc">
        <p className="card-card__name">
          {card.name}
        </p>
        <p className="card-card__text">
          {card.description}
        </p>
      </div> */}
    </div>
  )
}

export default Card;