import React from "react";
import "./index.css";

export interface IImage {
  src?: string | undefined;
  alt?: string
}

export const Image: React.FC<IImage> = (props) => {
  const { src, alt = "img" } = props;

  return (
    <>
      {src ? (
        <img src={src} alt={ alt } className="card-img"/>
      ) : null}
    </>
  );
};
