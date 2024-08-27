import React from "react";

export interface IInfo {
  info: string
}

export const Info: React.FC<IInfo> = (props) => {
  const { info } = props;
  return (
    <p className="card-text">{ info }</p>
  );
};
