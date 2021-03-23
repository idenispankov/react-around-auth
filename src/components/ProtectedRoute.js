import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AccountContext } from '../context/AccountContext';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const value = useContext(AccountContext);

  return (
    <Route>
      {() =>
        value.loggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to='./signin' />
        )
      }
    </Route>
  );
};

export default ProtectedRoute;
