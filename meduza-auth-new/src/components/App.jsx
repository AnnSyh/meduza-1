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
// стр вопросов
import Step1 from "./Questions/Step1";
import Step2 from "./Questions/Step2";
import Step3 from "./Questions/Step3";
import Result from "./results/Result";
// шаги опроса
import Health from "./Interview/Health";
import Familyfriends from "./Interview/Familyfriends";
import Love from "./Interview/Love";
import Career from "./Interview/Career";
import Money from "./Interview/Money";
import Fun from "./Interview/Fun";
import Growth from "./Interview/Growth";
// стр вопросов
import Celebration from "./Questions/Celebration";
import Step4Email from "./Questions/Step4Email";
import Step5Password from "./Questions/Step5Password";
import Step6BasedCity from "./Questions/Step6BasedCity";
import Step7ReadySeeRezalts from "./Questions/Step7ReadySeeRezalts";
// стр результатов
import StepYourPriorities from "./results/StepYourPriorities";
import StepYourPrioritiesDetail from "./results/StepYourPrioritiesDetail";
import StrategyQuest from "./results/StrategyQuest";
import ByTheWay from "./results/ByTheWay";
import PageNotFound from "./results/PageNotFound";


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

  function goBack() {
    history.goBack();
  }

  function handleLogin(username, password) {
    return auth
      .authorize(username, password)
      .then((data) => {
        if (!data) {
          throw new Error('Что-то пошло не так!');
        }
        if (data.jwt) {
          localStorage.setItem('jwt', data.jwt);
          const { user: { username, email } } = data;
          const userData = { username, email }
          setUserData(userData)
          setLoggedIn(true);
          history.push('/cards')
        }
      })
  }
  function handleRegister(username, email, password) {
    return auth
      .register(username, email, password)
      .then((res) => {
        const { statusCode, jwt } = res;

        console.log('handleRegister: 111 jwt = ', jwt);
        console.log('handleRegister: statusCode = ', statusCode);
        console.log('handleRegister: res = ', res);
        console.log('handleRegister: res.message = ', res.message);

        if (jwt) {
          history.push('/login');
        } else if (statusCode === 400) {
          const { message } = res.message
          throw new Error(message)
        } else {
          throw new Error('что-то пошло не так')
        }
      });
  }
  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      auth.getContent(jwt).then((res) => {
        if (res) {
          const { username, email } = res;
          const userData = { username, email }
          localStorage.setItem('jwt', res.jwt);
          setUserData(userData)
          setLoggedIn(true)
        }
      });
    }
  }

  function signOut() {
    localStorage.removeItem('jwt');
    history.push('/register');
    setLoggedIn(false);
  }

  return (

    <div className='App'>
      <Container className='App__container' >
        <Switch>
          <ProtectedRoute
            path="/cards"
            loggedIn={loggedIn}
            component={Cards}
            signOut={signOut}
          />
          <ProtectedRoute
            path="/my-profile"
            loggedIn={loggedIn}
            userData={userData}
            component={MyProfile}
          />
          <StateMachineProvider>
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

            <Route exact path="/" component={Step1} />
            <Route path="/step2" component={Step2} />
            {/* <Route path="/step2"><Step2 name='step2' /></Route> */}
            <Route path="/step3" component={Step3} />
            <Route path="/result" component={Result} />

            <Route path="/health" component={Health} />
            <Route path="/family-friends" component={Familyfriends} />
            <Route path="/love" component={Love} />
            <Route path="/career" component={Career} />
            <Route path="/money" component={Money} />
            <Route path="/fun" component={Fun} />
            <Route path="/growth" component={Growth} />

            <Route path="/celebration" component={Celebration} />
            <Route path="/your-email" component={Step4Email} />

            <Route path="/password" component={Step5Password} />
            {/* <Route path="/password">
              <Step5Password handleRegister={handleRegister} />
            </Route> */}

            <Route path="/based-city" component={Step6BasedCity} />
            <Route path="/ready-see-rezalts" component={Step7ReadySeeRezalts} />
            <Route path="/your-priorities" component={StepYourPriorities} />
            <Route path="/your-priorities-detail" component={StepYourPrioritiesDetail} />
            <Route path="/strategy-quest" component={StrategyQuest} />
            <Route path="/by-the-way" component={ByTheWay} />



          <Route path='/cards' >
            {loggedIn && <Redirect to='/login' />}
          </Route>

          <Route path="/404" component={PageNotFound} />
          {/* <Redirect to="/404" /> */}

          </StateMachineProvider>

          {/* <Route path='/not-found' component={PageNotFound} goBack={goBack}/> */}
          {/* <Route path='*' component={PageNotFound} /> */}
        </Switch>
      </Container>

    </div >
  )
}

export default App;
