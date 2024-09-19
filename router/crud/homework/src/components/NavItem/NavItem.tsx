import React from "react";
import { NavLink } from "react-router-dom";

export interface INavItem {
  label: string,
  link: string
}

export const NavItem: React.FC<INavItem> = (props) => {
  const { link, label } = props;
  return (
    <li className="nav__item">
      <NavLink to={link}>{label}</NavLink>
    </li>
  );
};
