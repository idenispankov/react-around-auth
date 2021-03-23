// import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AroundTheUs from './AroundTheUs';
import Login from './Login';
import Register from './Register';
import { AccountContext } from '../context/AccountContext';

export default function App() {
  return (
    <AccountContext.Provider value={AccountContext}>
      <div className='page'>
        <div className='page__container'>
          <Header />

          <Switch>
            <Route exact path='/'>
              <AroundTheUs />
            </Route>

            <Route path='/signin'>
              <Login />
            </Route>

            <Route exact path='/signup'>
              <Register />
            </Route>
          </Switch>

          <Footer />
        </div>
      </div>
    </AccountContext.Provider>
  );
}
