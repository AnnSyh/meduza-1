import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Cards from './Cards/Cards';
import MyProfile from './MyProfile/MyProfile';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../auth';
import './scss/style.css';

import Container from '@material-ui/core/Container';

import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step2Design from "./Step2/Step2Design";
import Step3 from "./Step3/Step3";
import Result from "./Result";
// шаги опроса
import Health from "./Health/Health";
import FamilyFreands from "./FamilyFreands/FamilyFreands";
import Love from "./Love/Love";
import Career from "./Career/Career";
import Money from "./Money/Money";
import Fun from "./Fun/Fun";
import Growth from "./Growth/Growth";
import Celebration from "./Celebration/Celebration";
// import Step4Email from "./Step4Email/Step4Email";

createStore({
  data: {}
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null)
  const [userData, setUserData] = useState({
    username: '',
    email: '',
  })
  const history = useHistory();

  useEffect(() => tokenCheck(), [])
  useEffect(() => {
    if (loggedIn) {
      history.push('/cards');
    }
  }, [history, loggedIn])

  function handleLogin(username, password) {
    return auth.authorize(username, password)
      .then((data) => {

        console.log('handleLogin: data = ', data);
        console.log('handleLogin: data.jwt = ', data.jwt);

        if (!data) {
          throw new Error('Что-то пошло не так!');
        }
        if (data.jwt) {
          const { user: { username, email } } = data;
          const userData = { username, email }
          // test: "hello"
          localStorage.setItem('jwt', data.jwt);
          setUserData(userData)
          setLoggedIn(true)
        }
      })
  }
  function handleRegister(username, password, email) {
    return auth
      .register(username, password, email)
      .then((res) => {
        console.log('handleRegister: res = ', res);

        const { statusCode, jwt } = res;
        if (jwt) {
          history.push('/login');
        } else if (statusCode === 400) {
          const { message } = res.message[0].messages[0]
          throw new Error(message)
        } else {
          throw new Error('Что-то пошло не так!')
        }
      });
  }
  const tokenCheck = () => {
    // debugger
    console.log('tokenCheck: setLoggedIn = ', setLoggedIn);

    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      auth.getContent(jwt).then((res) => {
        // debugger
        console.log('tokenCheck: res = ', res);

        if (res) {
          const { username, email } = res;
          const userData = { username, email }
          localStorage.setItem('jwt', res.jwt);
          setUserData(userData)
          setLoggedIn(true)
          history.push('/cards');
        }
      });
    }
  }

  return (

    <div className='App'>
      <Container className='App__container' >
        <Switch>
          <ProtectedRoute
            path="/cards"
            loggedIn={loggedIn}
            component={Cards}
          />
          <ProtectedRoute
            path="/my-profile"
            loggedIn={loggedIn}
            userData={userData}
            component={MyProfile}
          />
          <Route path="/login">
            <div className="loginContainer">
              <Login handleLogin={handleLogin} />
            </div>
          </Route>
          <Route path="/register">
            <div className="registerContainer">
              <Register handleRegister={handleRegister} />
            </div>
          </Route>

          <StateMachineProvider>
            <Route exact path="/" component={Step1} />
            {/* <Route path="/step2" component={Step2} /> */}
            <Route path="/step2" render={ () => <Step2 /> } />
            {/* <Route path="/step2">
              <Step2 name='step2' />
            </Route> */}
            <Route path="/Step2Design" component={Step2Design} />
            <Route path="/step3" component={Step3} />
            <Route path="/result" component={Result} />
            <Route path="/health" component={Health} />
            <Route path="/family-freands" component={FamilyFreands} />
            <Route path="/love" component={Love} />
            <Route path="/career" component={Career} />
            <Route path="/money" component={Money} />
            <Route path="/fun" component={Fun} />
            <Route path="/growth" component={Growth} />
            <Route path="/celebration" component={Celebration} />
            {/* <Route path="/your-email" component={Step4Email} /> */}
            {/* <Route path="/thanks" component={Step5Thanks} /> */}
        </StateMachineProvider>


          <Route>
            {loggedIn ? <Redirect to="/cards" /> : <Redirect to="/register" />}
          </Route>
        </Switch>
      </Container>

    </div>
  )
}

export default App;
