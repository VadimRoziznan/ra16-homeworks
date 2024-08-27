import React from "react";
import { NewsPreview } from "../newsPreview";
import "./index.css";


export const Search = () => {
  return (
    <div className="search-field">
      <span className="title-search"><span className="red">Я</span>ндекс</span>
      <input type="search" className="search-input" placeholder="Введите текст для поиска"/>
      <button className="button-search">Найти</button>
      <NewsPreview containerClassName="left-indent" title="Найдётся всё. Например, " titleClassName="satya-title" addition="фаза луны сегодня" additionClassName="satya-title grey"/>
    </div>
  );
};
