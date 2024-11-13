import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavItem(props) {
  const { link, label } = props;
  return (
    <li className="nav__item">
      <NavLink to={link}>{label}</NavLink>
    </li>
  );
}

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavItem;
