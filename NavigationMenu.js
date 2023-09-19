import React from 'react';

function NavigationMenu({ isOpen, toggleMenu }) {
  return (
    <nav className={`navigation-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <button onClick={toggleMenu} className="close-button"></button>
    </nav>
  );
}

export default NavigationMenu;
