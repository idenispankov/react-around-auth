import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AroundTheUs from './AroundTheUs';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../utils/auth';

const App = () => {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    this.setState({
      loggedIn: false,
    });
  }

  function handleTokenCheck() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth.checkToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push('around');
        }
      });
    }
  }

  useEffect(() => {
    handleTokenCheck();
  });

  return (
    <div>
      <div className='page'>
        <div className='page__container'>
          <Header handleLogout={handleLogout} />
          <Switch>
            <ProtectedRoute
              path='/around'
              loggedIn={loggedIn}
              component={AroundTheUs}
            />

            <Route path='/signin'>
              <Login handleLogin={handleLogin} />
            </Route>

            <Route path='/signup'>
              <Register />
            </Route>

            <Route path='/'>
              {loggedIn ? <Redirect to='/around' /> : <Redirect to='/signin' />}
            </Route>
          </Switch>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
