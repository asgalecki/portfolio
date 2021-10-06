import React from 'react';
import Terminal from './Terminal';

const Header = () => {
  return (
    <header className="header">
      <div className="header__headings">
        <h1 className="header__heading">Artur Gałecki</h1>
        <h2 className="header__heading header__heading--font-size">
          Portfolio Website
        </h2>
      </div>
      <Terminal />
    </header>
  );
};

export default Header;
