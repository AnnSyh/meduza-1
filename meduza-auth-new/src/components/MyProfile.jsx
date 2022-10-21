import React from 'react';
import NavBar from './NavBar';
import './styles/MyProfile.css';
import './styles/personal-area.css';
import TopBar from './TopBar';
import classes from './styles/MyProfile.module.css';

function MyProfile(props) {
  let { username, email } = props.userData;
  return (
    <div className='personal-area'>
      <TopBar />
      <NavBar />
      <div className='personal-area__content'>
        <div className={classes.wrapper}>
          <div className='personal-area__content'>
            <div className="my-profile">
              <div className="my-profile__container">
                <div className="my-profile__header">
                  <h1>Мой профиль</h1>
                </div>
                <div className="my-profile__info">
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
      </div>
    </div>
  )
}

export default MyProfile;