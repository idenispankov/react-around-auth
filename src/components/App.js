// import { useState, useEffect } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Login from './Login';
import Register from './Register';
import Header from './Header';
// import AroundTheUs from './AroundTheUs';
// import Login from './Login';
import { AccountContext } from '../context/AccountContext';

export default function App() {
  return (
    <AccountContext.Provider value={{}}>
      <div className='page'>
        <div className='page__container'>
          <Header />
          {/* <AroundTheUs /> */}
          {/* <Login /> */}
          <Register />
          {/* <Switch>
            <ProtectedRoute exact path='/' component={AroundTheUs} />
          </Switch>
          <Route path='/signin'>
            <Login />
          </Route> */}
        </div>
      </div>
    </AccountContext.Provider>
  );
}
