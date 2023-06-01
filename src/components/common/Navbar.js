import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

import Sidebar from './Sidebar';
import Login from '../auth/Login';
import './Navbar.sass'
import '../../Reset.css';
import ProfileButton from './ProfileIcon';



export default function Navbar(props) {

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <nav className="nav">
          <Link to="/" className="site-title">
            <FontAwesomeIcon icon={faPlane} />
            Flights .com
          </Link>
        </nav>
      </Link>
      <ul>
        <li>
          <Link to="/login" className='button'>
            Login
          </Link>
        </li>
        <li>
          <Link to="/logout" className='button'>
            Logout
          </Link>
          {/* <button className='button'>
          </button> */}
        </li>
      </ul>
      <Sidebar/>
      <ProfileButton/>
    </nav>
  )
}
