import React from "react";
import "./buttons.css";

export interface ICloseButton {
  type: "button" | "submit" | "reset",
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export const CloseButton: React.FC<ICloseButton> = (props) => {
  const { type, onClick } = props;

  return (
    <>
      <button className="close-button" type={type} onClick={onClick}></button>
    </>
  );
};
