import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import styles from './styles/NavBar.module.css';

import PersonPinIcon from '@material-ui/icons/PersonPin';
import StyleIcon from '@material-ui/icons/Style';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});


function NavBar() {
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
    <div className={styles.navbar}>
      <ul className={styles.ul}>
        <li
          className={styles.li}
          onChange={handleChange}
          value={value}
          variant="fullWidth"
        >
          <Link to="cards" className={styles.link}>
            <StyleIcon fontSize='large' />
          </Link>
        </li>
        <li
          className={styles.li}
          onChange={handleChange}
          value={value}
          variant="fullWidth"
        >
          <Link to="my-profile" className={styles.link}>
            <PersonPinIcon fontSize='large' />
          </Link>
        </li>
        <li
          className={styles.li}
          onChange={handleChange}
          value={value}
          variant="fullWidth"
        >
          <span onClick={signOut} className="link navbar__button">
            <MeetingRoomIcon fontSize='large' />
          </span>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;