import React from "react";
import { NavItem } from "../NavItem/NavItem";

import "./nav.scss";

export const Nav = () => {
  const navItems = [
    { label: "Главная", link: "/" },
    { label: "Сздать пост", link: "/posts/new" },
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
};
