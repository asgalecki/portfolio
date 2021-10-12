import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const NavMenu = ({ isActive }) => {
  const active = isActive ? 'nav__menu--active' : '';

  return (
    <div className={`nav__menu ${active}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <AnchorLink
            to="/#home"
            title="Home"
            className="nav__link"
            stripHash
          />
        </li>
        <li className="nav__item">
          <AnchorLink
            to="/#projects"
            title="Projects"
            className="nav__link"
            stripHash
          />
        </li>
        <li className="nav__item">
          <AnchorLink
            to="/#contact"
            title="Contact"
            className="nav__link"
            stripHash
          />
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
