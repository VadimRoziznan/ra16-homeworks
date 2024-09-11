import React from "react";
import "./updateButton.css";

export interface IUpdateButton {
  img: string,
  name:string,
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const UpdateButton: React.FC<IUpdateButton> = (props) => {
  const { img, name, onClick } = props;
  return (
    <button className="updateButton" onClick={onClick}>
      <img src={img} alt={name} />
    </button>
  );
};
