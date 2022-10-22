import React from 'react';
import NavBar from '../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';

import classes from './MyProfile.module.css';

function MyProfile(props) {
  let { username, email } = props.userData;
  return (
    <div className='personal-area'>

      <TopBar />
      <NavBar />
      <div className='personal-area__content'>

          <div className='personal-area__content'>
            <div className={classes.profile}>

              <div className='my-profile__container cards__list-wrapper'>
                  <h1>Мой профиль</h1>
                  <div className={classes.user}>
                    <p className={classes.key}>Логин:</p>
                    <p className={classes.value}>{username}</p>
                  </div>
                  <div className={classes.user}>
                    <p className={classes.key}>Email:</p>
                    <p className={classes.value}>{email}</p>
                  </div>
              </div>

            </div>
          </div>

      </div>

    </div>
  )
}

export default MyProfile;