import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import PersonPinIcon from '@material-ui/icons/PersonPin';
import StyleIcon from '@material-ui/icons/Style';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

import styles from './NavBar.module.css';

function NavBar() {
  const history = useHistory();
  function signOut() {
    localStorage.removeItem('jwt');
    history.push('/register');
  }

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
          <NavLink
            to="cards"
            className={styles.link}
            activeClassName={styles.active}
          >
            <StyleIcon fontSize='large' />
          </NavLink>
        </li>
        <li
          className={styles.li}
          onChange={handleChange}
          value={value}
          variant="fullWidth"
        >
          <NavLink
            to="my-profile"
            className={styles.link}
            activeClassName={styles.active}
          >
            <PersonPinIcon fontSize='large' />
          </NavLink>
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