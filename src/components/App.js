import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AroundTheUs from './AroundTheUs';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../utils/auth';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleTokenCheck = this.handleTokenCheck.bind(this);
  }

  componentDidMount() {
    this.handleTokenCheck();
  }

  handleTokenCheck() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth.checkToken(jwt).then((res) => {
        if (res) {
          this.setState({
            loggedIn: true,
          });
        }
      });
    }
  }

  handleLogin() {
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    return (
      <div className='page'>
        <div className='page__container'>
          <Header />
          <Switch>
            <ProtectedRoute
              path='/around'
              loggedIn={this.state.loggedIn}
              component={AroundTheUs}
            />

            <Route path='/signin'>
              <Login handleLogin={this.handleLogin} />
            </Route>

            <Route path='/signup'>
              <Register />
            </Route>

            <Route path='/'>
              {this.state.loggedIn ? (
                <Redirect to='/around' />
              ) : (
                <Redirect to='/signin' />
              )}
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
