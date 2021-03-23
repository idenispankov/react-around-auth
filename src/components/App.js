import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AroundTheUs from './AroundTheUs';
import Login from './Login';
import Register from './Register';
import { AccountContext } from '../context/AccountContext';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AccountContext.Provider value={AccountContext}>
      <div className='page'>
        <div className='page__container'>
          <Header />

          <Switch>
            <Route path='/around'>
              <AroundTheUs />
            </Route>

            <Route path='/signin'>
              <Login />
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
    </AccountContext.Provider>
  );
}
