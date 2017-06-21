import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Header from './header';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import UsersContainer from './users/users_container.jsx';

const App = () => {
  return (
  <div>
    <Header />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/signin" component={SessionFormContainer} />
    <UsersContainer />
  </div>
  );
};

export default App;
