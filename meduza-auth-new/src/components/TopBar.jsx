import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import './styles/TopBar.css';

import StyleIcon from '@material-ui/icons/Style';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';



function TopBar() {


  return (
    <div className='top-bar'>
      <div className='top-bar__right'>
        <Button type="submit" variant="contained" color="primary">
          Upgrade to Premium
        </Button>
        <Link to="cards" className=''>
          <MenuIcon fontSize='large' />
        </Link>
      </div>
    </div>
  )
}

export default TopBar;