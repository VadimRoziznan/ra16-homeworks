import React from "react";
import "./notes.css";

export interface INotes {
  note: string
}

export const Notes: React.FC<INotes> = (props) => {
  const { note } = props;
  return (
    <div className="container">
      <div className="border">
        <p>{note}</p>
      </div>
    </div>
  );
};
