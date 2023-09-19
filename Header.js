import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the close icon
import NavigationMenu from './NavigationMenu';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      
      <div className="logo">

      <Link to={'/'}>
           <img src="logo.png" alt="Logo"/>
      </Link>
      
      </div>
      <h1 className="site-name">PRG CARS</h1>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      <NavigationMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
