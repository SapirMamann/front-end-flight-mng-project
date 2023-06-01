import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardClip } from '@fortawesome/free-solid-svg-icons';

import './ProfileIcon.css'


const ProfileIcon = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <div className="menu-container">
      <button className="toggle-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faIdCardClip} />
      </button>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        {/* content for menu */}
        <ul className='menu-links'>
          <li><a href="/bla">Bla</a></li>
          {/* add: logged in-> he can see log out */}
        </ul>
      </div>
    </div>
  );
};

export default ProfileIcon;
