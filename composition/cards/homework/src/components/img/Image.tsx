import React from "react";
import "./index.css";

export interface IImage {
  src?: string,
  alt: string
};

export const Image: React.FC<IImage> = (props) => {
  const { src, alt } = props;

  return src ? (
    <img src={ src } alt={ alt } className="card-img" />
  ) : (
    <div />
  );
};