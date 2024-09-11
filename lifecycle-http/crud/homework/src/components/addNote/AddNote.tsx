import React from "react";
import "./addNote.css";

export interface IAddNote {
  // eslint-disable-next-line no-unused-vars
  onContentChange: (content: string) => void;
  content: string;
}

export const AddNote: React.FC<IAddNote> = ({ onContentChange, content }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onContentChange(event.target.value);
  };

  return (
    <div className="addNote">
      <textarea value={content} onChange={handleChange}></textarea>
    </div>
  );
};
