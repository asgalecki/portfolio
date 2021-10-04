import React, { useState } from 'react';
import { Link } from 'gatsby';

import Hamburger from './Hamburger';
import NavMenu from './NavMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <Link className="nav__logo" to={`/`}>
          portfolio
        </Link>
        <span onClick={handleMenu}>
          <Hamburger isActive={isOpen} />
        </span>
        <NavMenu isActive={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
