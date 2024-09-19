import React from "react";
import { Nav } from "../Nav/Nav";
import { Posts } from "../Post/Posts";

import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Nav />
    </header>
  );
};
