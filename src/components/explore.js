import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faUser } from '@fortawesome/free-solid-svg-icons';
import './homepage.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/homepage" className="navbar-button">
        <FontAwesomeIcon icon={faHome} className="icon" />
      </Link>
      <Link to="/explore" className="navbar-button">
        <FontAwesomeIcon icon={faCompass} className="faCompass" /> 
      </Link>
      <Link to="/profile" className="navbar-button">
        <FontAwesomeIcon icon={faUser} className="icon" />
      </Link>
    </div>
  );
};

export default Navbar;
