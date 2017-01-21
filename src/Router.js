import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import HomePage from './components/HomePage';
import UpdateUser from './components/UpdateUser';
import UserFeed from './components/UserFeed'

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
            initial
          />
          <Scene
            key="updatePage"
            component={UpdateUser}
            hideNavBar={true}
          />
          <Scene
            key="userFeed"
            component={UserFeed}
            hideNaveBar={true}
          />
        </Scene>


    </Router>
  )
}

export default RouterComponent;
