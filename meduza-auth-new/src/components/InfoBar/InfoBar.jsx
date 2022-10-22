import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Card from '../Cards/Card';
import data from '../../data.js';
import '../scss/style.css';
import nextMission from '../../images/next-mission.png';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';


// стили для кнопки 
const BootstrapButton = withStyles({
  root: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#E9EDF0',
    border: '1px solid',
    borderColor: '#ffffff',
    color: '#215C75',
    padding: '0 20px',
    height: '50px',
    width:'120px',
    margin: '0 0 20px 0',
    borderRadius: '30px',
    textTransform: 'none',
  },
})(Button);

function InfoBar() {

  return (
    <div className="info-bar">
      <div className="cards__list-wrapper">
        <h1>My Next Mission</h1>
        <p>
          In this mission, you will define your design principles for life — your values.
        </p>
        <p>
          They will help you make decisions, make sure you stay on track in life and guide you towards a fulfilling life.
        </p>
        <img className='info-bar__img' src={nextMission} alt="" />
        <BootstrapButton>
          Start
        </BootstrapButton>
      </div>
    </div>
  )
}

export default InfoBar;