import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { Link, useHistory } from 'react-router-dom';
import '../styles/style.css';

// import StyleIcon from '@material-ui/icons/Style';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

// стили для кнопки 
const BootstrapButton = withStyles({
  root: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#E9EDF0',
    border: '1px solid',
    borderColor: '#ffffff',
    color: '#215C75',
    padding: '0 20px',
    height: '50px',
    margin: '0 10px',
    borderRadius: '30px',
    textTransform: 'none',
    // '&:hover': {
    //   backgroundColor: '#ffffff',
    //   borderColor: '#ffffff',
    // },
    // '&:active': {
    //   backgroundColor: '#ffffff',
    //   borderColor: '#ffffff',
    // },
    // '&:focus': {
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    // },
  },
})(Button);

function TopBar() {


  return (
    <div className='top-bar'>
      <div className='top-bar__right'>
        <BootstrapButton>
          Upgrade to Premium
        </BootstrapButton>
        <BootstrapButton>
          <MenuIcon fontSize='large' />
        </BootstrapButton>
        {/* <Link to="cards" className=''>
          <MenuIcon fontSize='large' />
        </Link> */}
      </div>
    </div>
  )
}

export default TopBar;