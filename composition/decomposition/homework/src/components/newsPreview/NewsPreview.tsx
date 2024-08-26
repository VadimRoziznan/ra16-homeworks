import React from "react";
import "./newsPreview.css";


export interface INewsPreview {
  containerClassName?: string;
  header?: string;
  headerClassName?: string;
  title?: string;
  titleClassName?: string;
  addition?: string;
  additionClassName?: string;
}


export const NewsPreview: React.FC<INewsPreview> = (props) => {
  const { containerClassName, header, headerClassName, title,  titleClassName,  addition,  additionClassName} = props;

  return (
    <div className={`news-preview-container ${containerClassName}`}>
      {header && (
        <span className={`news-preview-header ${headerClassName}`}>{header}</span>
      )}
      <span className={`news-preview-title ${titleClassName}`}>{title}</span>
      {addition && (
        <span className={`news-preview-addition ${additionClassName}`}>{addition}</span>
      )}
    </div>
  );
};