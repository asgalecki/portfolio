import React from 'react';
import { Link } from 'gatsby';

const NavMenu = ({ isActive }) => {
  const active = isActive ? 'nav__menu--active' : '';

  return (
    <div className={`nav__menu ${active}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to={`/`}>
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={`#projects`}>
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={`#contact`}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
