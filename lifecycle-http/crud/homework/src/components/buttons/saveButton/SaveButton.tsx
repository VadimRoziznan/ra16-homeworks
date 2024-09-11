import React from "react";
import "./saveButton.css";

export interface ISaveButton {
  img: string,
  name: string,
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const SaveButton: React.FC<ISaveButton> = (props) => {
  const { img, name, onClick } = props;
  return (
    <button className="saveButton" onClick={onClick}>
      <img src={img} alt={name} />
    </button>
  );
};