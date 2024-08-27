import React from "react";
import "./index.css";

export const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="container-row list-style-type-off">
        <li><a className="blue space-between-words list-style-type-off" href="#">Видео</a></li>
        <li><a className="blue space-between-words list-style-type-off" href="#">Картинки</a></li>
        <li><a className="blue space-between-words list-style-type-off" href="#">Новости</a></li>
        <li><a className="blue space-between-words list-style-type-off" href="#">Карты</a></li>
        <li><a className="blue space-between-words list-style-type-off" href="#">Маркет</a></li>
        <li><a className="blue space-between-words list-style-type-off" href="#">Переводчик</a></li>
        <li><a className="blue space-between-words list-style-type-off" href="#">Эфир</a></li>
        <li><a className="blue space-between-words list-style-type-off" href="#">ещё</a></li>
      </ul>
    </nav>
  );
};