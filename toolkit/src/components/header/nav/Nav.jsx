import React from 'react';
import NavItem from '../navItem/NavItem';
import './nav.css';

function Nav() {
  const navItems = [
    { label: 'Главная', link: '/' },
    { label: 'Избранное', link: '/favorite' },
  ];

  return (
    <nav className="nav">
      <ul className="nav__items">
        {navItems.map(({ label, link }) => (
          <NavItem key={label} label={label} link={link} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
