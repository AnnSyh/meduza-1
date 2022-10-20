import React from 'react';
import NavBar from './NavBar';
import './styles/MyProfile.css';
import './styles/personal-area.css';
import TopBar from './TopBar';
// import  classes from './styles/MyProfile.module.css';

function MyProfile (props) {
  let { username, email} = props.userData;
  return (
    <div className='personal-area'>
      <TopBar />
      <NavBar />
      <div className='personal-area__content'>
        <div className="my-profile">
          <div className="my-profile__container">
            <div className="my-profile__header">
              <p>1111Мой профиль</p>
              <hr className="my-profile__rule"/>
            </div>
            <div className="my-profile__info">
              <div className="my-profile__user">
                <p className="my-profile__key">Логин:</p>
                <p className="my-profile__value">{username}</p>
              </div>
              <div className="my-profile__user">
                <p className="my-profile__key">Email:</p>
                <p className="my-profile__value">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile;