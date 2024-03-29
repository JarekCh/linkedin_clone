import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/App.css';
import { selectUser, logout, login } from './features/userSlice';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import { auth } from './firebase';
import Widgets from './components/Widgets';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
