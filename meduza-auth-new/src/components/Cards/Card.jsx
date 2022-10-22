import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import './../styles/Card.css';

// стили для кнопки 
const BootstrapButton = withStyles({
  root: {
    backgroundColor: '#E9EDF0',
    border: '1px solid',
    borderColor: '#ffffff',
    color: '#215C75',
    height: '60px',
    margin: '10px',
    borderRadius: '30px',
  },
})(Button);

function Card(props) {
  let { card } = props;
  return (
    <div className="cards__item-wrapper">
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
        <BootstrapButton>
          <LockIcon fontSize='large' />
        </BootstrapButton>
      </div>
    </div>
  )
}

export default Card;