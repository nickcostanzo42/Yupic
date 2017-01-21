import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import HomePage from './components/HomePage';

const RouterComponent = () => {
  return(
    <Router>

        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            hideNavBar={true}
            initial
          />
          <Scene
            key="signUp"
            component={SignUpForm}
            hideNavBar={true}
          />
        </Scene>

        <Scene key="userPage">
          <Scene
            key="homePage"
            component={HomePage}
            hideNavBar={true}
          />
        </Scene>


    </Router>
  )
}

export default RouterComponent;
