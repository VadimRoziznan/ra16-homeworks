import React from "react";
import "./image.css";

export interface IImage {
  className?: string,
  src: string,
  alt?: string
};

export const Image: React.FC<IImage> = (props) => {
  const { className, src, alt } = props;

  return src ? (
    <img className={ className } src={ src } alt={ alt }/>
  ) : (
    <div />
  );
};