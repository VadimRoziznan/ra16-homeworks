import React from "react";
import "./satya.css";
import { Image } from "../img/image";

export interface ISatya {
  containerClassName?: string,
  image?: string,
  imageClassName?: string,
  header?: string,
  headerClassName?: string,
  title?: string,
  titleClassName?: string,
  addition?: string,
  additionClassName?: string
};


export const Satya: React.FC<ISatya> = (props) => {
  const {
    containerClassName,
    image,
    imageClassName,
    header,
    headerClassName,
    title,
    titleClassName,
    addition,
    additionClassName,
  } = props;
  return (
    <div className={ containerClassName ? containerClassName : "" }>
      {image ? <Image className={ imageClassName ? imageClassName : "" } src={ image } alt="alt"/> : null}
      {header ? <span className={ headerClassName ? headerClassName : "" }>{ header }</span> : null}
      <span className={ titleClassName ? titleClassName : "" }>{ title }</span>
      {addition ? <span className={ additionClassName ? additionClassName : "" }>{ addition }</span> : null}
    </div>
  );
};
