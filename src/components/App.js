import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Footer from './Footer';
import AroundTheUs from './AroundTheUs';
import { AccountContext } from '../context/AccountContext';

export default function App() {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [accountData, setAccountData] = useState({ _id: '', email: '' });

  return (
    <AccountContext.Provider value={{}}>
      <div className='page'>
        <div className='page__container'>
          <Header />
          <Switch>
            <ProtectedRoute exact path='/' component={AroundTheUs} />

            <Route path='/signin'>
              <Login />
            </Route>

            <Route path='/signup'>
              <Register />
            </Route>

            <Route>
              {/* {loggedIn ? <Redirect to='/' /> : <Redirect to='/signin' />} */}
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </AccountContext.Provider>
  );
}
