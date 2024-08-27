import React from "react";
import { ArticleTitle } from "../articleTitle";
import { NewsPreview } from "../newsPreview";
import { Image } from "../img/image";
import "./index.css";

const someImage: string = "/logo192.png";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-item">
        <ArticleTitle className="articleTitle-container-row" title="Сейчас в СМИ" titleClassName="articleTitle-title" articl="в Германии Рекомендуем" date="31 июля, среда 02:32"/>
        <div className="">
          <div className="container">
            <div>
              <div className="container-row">
                <Image className="header-img small" src={ someImage } alt="alt"/>
                <NewsPreview containerClassName="satya-container" title="Путин упростил получение автомобильных номеров" titleClassName="satya-title"/>
              </div>
              <div className="container-row">
                <Image className="header-img small" src={ someImage } alt="alt"/>
                <NewsPreview containerClassName="satya-container" title="Путин упростил получение автомобильных номеров" titleClassName="satya-title"/>
              </div>
              <div className="container-row">
                <Image className="header-img small" src={ someImage } alt="alt"/>
                <NewsPreview containerClassName="satya-container" title="Путин упростил получение автомобильных номеров" titleClassName="satya-title"/>
              </div>
              <div className="container-row">
                <Image className="header-img small" src={ someImage } alt="alt"/>
                <NewsPreview containerClassName="satya-container" title="Путин упростил получение автомобильных номеров" titleClassName="satya-title"/>
              </div>
              <div className="container-row">
                <Image className="header-img small" src={ someImage } alt="alt"/>
                <NewsPreview containerClassName="satya-container" title="Путин упростил получение автомобильных номеров" titleClassName="satya-title"/>
              </div>
              <div className="container-row">
                <NewsPreview containerClassName="satya-container" header="USD MOEX" headerClassName="satay-header" title="63,52" titleClassName="satya-title" addition="+0,09" additionClassName="satya-article"/>
                <NewsPreview containerClassName="satya-container" header="USD MOEX" headerClassName="satay-header" title="63,52" titleClassName="satya-title" addition="+0,09" additionClassName="satya-article"/>
                <NewsPreview containerClassName="satya-container" header="USD MOEX" headerClassName="satay-header" title="63,52" titleClassName="satya-title" addition="+0,09" additionClassName="satya-article"/>
              </div>
            </div>
            <div className="">
              <Image className="header-img medium" src={ someImage } alt="alt"/>
              <ArticleTitle className="articleTitle-container-row" title="Работа над ошибками"/>
              <NewsPreview containerClassName="satya-container" title="Смотрите на Яндексе и запоминайте"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
