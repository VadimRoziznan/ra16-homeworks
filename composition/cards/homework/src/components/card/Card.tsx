import React from "react";
import { Image } from "../img";
import { CardButton } from "../button";
import "./index.css";

export interface ICard {
  image?: string,
  title: string,
  info: string
}

export const Card: React.FC<ICard> = (props) => {
  const { image, title, info } = props;

  return (
    <div className="container">
      <Image src={ image } alt="alt"/>
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <p className="card-text">{ info }</p>
        <CardButton href="#" title="Go somewhere"/>
      </div>
    </div>
  );
};
