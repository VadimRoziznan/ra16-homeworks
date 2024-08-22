import React from "react";
import { CardButton } from "../button";
import "./index.css";

export interface ICard {
  imgSrc?: string,
  imgAlt?: string
  title: string,
  info: string,
  buttonHref: string,
  buttonTitle: string
}

export const Card: React.FC<ICard> = (props) => {
  const { imgSrc, imgAlt,  title, info, buttonHref, buttonTitle } = props;

  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      ) : null}
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <p className="card-text">{ info }</p>
        <CardButton href={ buttonHref } title={ buttonTitle }/>
      </div>
    </div>
  );
};
