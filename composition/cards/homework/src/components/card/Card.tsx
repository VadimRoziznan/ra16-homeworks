import React from "react";
import { Image } from "../image";
import { Title } from "../title";
import { Info } from "../info";
import { CardButton } from "../button";
import "./index.css";

export interface ICard {
  src?: string,
  alt?: string,
  title: string,
  info: string,
  buttonHref: string,
  buttonTitle: string
}

export const Card: React.FC<ICard> = (props) => {
  const { src, alt, title, info, buttonHref, buttonTitle } = props;

  return (
    <div className="card">
      <Image src={ src } alt={ alt }/>
      <div className="card-body">
        <Title title={ title }/>
        <Info info={ info }/>
        <CardButton href={ buttonHref } title={ buttonTitle }/>
      </div>
    </div>
  );
};
