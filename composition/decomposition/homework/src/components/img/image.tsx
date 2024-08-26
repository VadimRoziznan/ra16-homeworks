import React from "react";
import "./image.css";

export interface IImage {
  className?: string,
  src?: string | undefined;
  alt?: string
};

export const Image: React.FC<IImage> = (props) => {
  const { className, src, alt = "img" } = props;

  return (
    <>
      {src ? (
        <img src={src} alt={ alt } className={ className }/>
      ) : null}
    </>
  );
};

