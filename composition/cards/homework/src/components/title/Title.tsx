import React from "react";

export interface ITitle {
  title: string
}

export const Title: React.FC<ITitle> = (props) => {
  const { title } = props;

  return (
    <h5 className="card-title">{ title }</h5>
  );
};