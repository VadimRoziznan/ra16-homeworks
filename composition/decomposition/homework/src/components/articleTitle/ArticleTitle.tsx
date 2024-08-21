import React from "react";
import "./articleTitle.css";

export interface IArticleTitle {
  className?: string,
  title: string,
  titleClassName?: string,
  articl?: string,
  date?: string
}

export const ArticleTitle: React.FC<IArticleTitle> = (props) => {
  const { className, title, titleClassName, articl, date } = props;
  return (
    <div className={className ? className : ""}>
      <h5 className={ titleClassName ? titleClassName : "" }>{ title }</h5>
      {articl && <h5 className="articleTitle-article">{articl}</h5>}
      {date && <time className="articleTitle-date" dateTime={date}>{date}</time>}
    </div>
  );
};
