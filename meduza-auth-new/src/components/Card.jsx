import React from 'react';
import './styles/Card.css';

function Card(props) {
  let { card } = props;
  return (
    <div className="cards__item">
      <div className="cards__item">
        <div className="cards__pic">
          <img className="cards__img" src={card.img} alt='' />
        </div>
        <div className="cards__desc">
          <div className="cards__name">
            {card.name}
          </div>
          <div className="cards__text">
            {card.description}
          </div>
        </div>
      </div>
        <div className="cards__icon">
          <div className="cards__naumber">
            1
          </div>
        </div>
    </div>
  )
}

export default Card;