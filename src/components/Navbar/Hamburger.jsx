import React from 'react';

const Hamburger = ({ isActive }) => {
  const active = isActive ? 'hamburger--active' : '';

  return (
    <button
      className={`hamburger ${active}`}
      aria-label="Open or close the menu."
    >
      <span className="hamburger__box">
        <span className="hamburger__inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
