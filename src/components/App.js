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
    console.log(localStorage.getItem('jwt'));
    localStorage.removeItem('jwt');
    setLoggedIn(false);
  }

  function handleRegister() {
    auth.register(this.state.email, this.state.password).then((res) => {
      if (res.statusCode !== 400) {
        this.props.history.push('/signin');
      }
    });
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth.checkToken(token).then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push('/around');
        }
      });
    }
  }, [history]);

  return (
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
            <Register handleRegister={handleRegister} />
          </Route>

          <Route path='/'>
            {loggedIn ? <Redirect to='/around' /> : <Redirect to='/signin' />}
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: false,
//     };
//     this.handleLogin = this.handleLogin.bind(this);
//     this.handleLogout = this.handleLogout.bind(this);
//     this.handleTokenCheck = this.handleTokenCheck.bind(this);
//   }

//   componentDidMount() {
//     this.handleTokenCheck();
//   }

//   handleTokenCheck() {
//     if (localStorage.getItem('jwt')) {
//       const jwt = localStorage.getItem('jwt');
//       auth.checkToken(jwt).then((res) => {
//         if (res) {
//           console.log(res);
//           this.setState(
//             {
//               loggedIn: true,
//             }
//             // () => {
//             //   this.props.history.push('/around');
//             // }
//           );
//         }
//       });
//     }
//   }

//   handleLogin() {
//     this.setState({
//       loggedIn: true,
//     });
//   }

//   handleLogout = () => {
//     localStorage.removeItem('jwt');
//     this.setState({
//       loggedIn: false,
//     });
//   };

//   render() {
//     return (
//       <div className='page'>
//         <div className='page__container'>
//           <Header handleLogout={this.handleLogout} />
//           <Switch>
//             <ProtectedRoute
//               path='/around'
//               loggedIn={this.state.loggedIn}
//               component={AroundTheUs}
//             />

//             <Route path='/signin'>
//               <Login handleLogin={this.handleLogin} />
//             </Route>

//             <Route path='/signup'>
//               <Register />
//             </Route>

//             <Route path='/'>
//               {this.state.loggedIn ? (
//                 <Redirect to='/around' />
//               ) : (
//                 <Redirect to='/signin' />
//               )}
//             </Route>
//           </Switch>
//           <Footer />
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(App);
