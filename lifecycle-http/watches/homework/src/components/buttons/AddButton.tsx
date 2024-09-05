import React from "react";
import "./buttons.css";

export interface IAddButton {
  name: string,
  type: "button" | "submit" | "reset",
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export const AddButton: React.FC<IAddButton> = (props) => {
  const { name, type, onClick } = props;

  return (
    <>
      <button className="add-button" type={type} onClick={onClick}>{ name }</button>
    </>
  );
};
