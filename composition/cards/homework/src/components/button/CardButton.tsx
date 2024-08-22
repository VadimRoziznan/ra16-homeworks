import React from "react";
import "./index.css";

export interface ICardButton {
  href: string,
  title: string
}

export const CardButton: React.FC<ICardButton> = (props) => {
  const { href, title} = props;
  return (
    <a href={ href } className="btn btn-primary">{ title }</a>
  );
};
