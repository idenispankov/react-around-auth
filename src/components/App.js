import Header from './Header';
import Footer from './Footer';
import { CurrentUserContext } from '../context/CurrentUserContext';
// import AroundTheUs from './AroundTheUs';
// import Login from './Login';
import Register from './Register';

export default function App() {
  return (
    <CurrentUserContext.Provider>
      <div className='page'>
        <div className='page__container'>
          <Header />
          {/* <AroundTheUs /> */}
          {/* <Login /> */}
          <Register />
          <Footer footerText='&copy; 2020 Around The U.S.' />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}
