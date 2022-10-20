import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import './styles/TopBar.css';

import PersonPinIcon from '@material-ui/icons/PersonPin';
// import LoginIcon from '@material-ui/icons/Login';
import StyleIcon from '@material-ui/icons/Style';
import AllOutSharpIcon from '@material-ui/icons/AllOutSharp';

import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});


function TopBar() {
  const history = useHistory();
  function signOut() {
    localStorage.removeItem('jwt');
    history.push('/register');
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='top-bar'>
      <ul>
        <li
          onChange={handleChange}
          value={value}
          variant="fullWidth"
        >
          <Link
            to="cards"
            >
            <StyleIcon fontSize='large' />
          </Link>
        </li>
        <li
          onChange={handleChange}
          value={value}
          variant="fullWidth"
        >
          <Link
            to="my-profile"
            >
            <PersonPinIcon fontSize='large' />
          </Link>
        </li>
        <li
          onChange={handleChange}
          value={value}
          variant="fullWidth"
        >
          <span
            onClick={signOut}
            className="link navbar__button"
          >
            <AllOutSharpIcon fontSize='large' />
          </span>
        </li>
      </ul>
    </div>
  )
}

export default TopBar;