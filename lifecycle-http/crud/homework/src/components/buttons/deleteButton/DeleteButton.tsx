import React from "react";
import "./deleteButton.css";

export interface IDeleteButton {
  img: string,
  name: string,
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const DeleteButton: React.FC<IDeleteButton> = (props) => {
  const { img, name, onClick } = props;
  return (
    <button className="deleteButton" onClick={onClick}>
      <img src={img} alt={name} />
    </button>
  );
};
