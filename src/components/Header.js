import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@mui/icons-material/Home';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
          alt=''
        />

        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Search' type='text' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisedUserCircleIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={true} title='me' onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;
