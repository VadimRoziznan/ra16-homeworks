import React from "react";
import "./inputField.css";

export interface IInputField {
  htmlFor: string,
  label: string,
  type?: string,
  pattern?: string
}

export const InputField: React.FC<IInputField> = (props) => {
  const { htmlFor, label, type="text", pattern } = props;

  return (
    <>
      <div className="container">
        <label htmlFor={htmlFor}>{ label }</label>
        <input className="input-field" type={type} id={htmlFor} required pattern={pattern}></input>
      </div>

    </>
  );
};