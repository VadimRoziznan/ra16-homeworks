import React from "react";
import { ArticleTitle } from "../articleTitle";
import { Image } from "../img/image";
import { NewsPreview } from "../newsPreview";
import "./index.css";

const someImage: string = "/logo192.png";

export const News = () => {
  return (
    <section className="news">
      <div className="new">
        <ArticleTitle className="new-item articleTitle-container-row" title="Погода" titleClassName="articleTitle-title"/>
        <div className="info">
          <Image className="weather-img medium" src={ someImage } alt="alt"/>
          <NewsPreview containerClassName="weather-info" title="Утром +17" titleClassName="satya-title"/>
        </div>
        <ArticleTitle className="new-item articleTitle-container-row" title="Посещаемое" titleClassName="articleTitle-title"/>
        <div className="">
          <NewsPreview header="Недвижимость" headerClassName="info-item" title=" - о сталинках" titleClassName="satya-title"/>
          <NewsPreview header="Маркет" headerClassName="info-item" title=" - люстры и светильники" titleClassName="satya-title"/>
          <NewsPreview header="Авто.ру" headerClassName="info-item" title=" - привод 4х4 до 500 000" titleClassName="satya-title"/>
        </div>
      </div>
      <div className="new">
        <ArticleTitle className="new-item articleTitle-container-row" title="Карта Германии" titleClassName="articleTitle-title"/>
        <div className="">
          <NewsPreview title="Расписание" titleClassName="satya-title-one"/>
        </div>
        <ArticleTitle className="new-item articleTitle-container-row" title="Карта Германии" titleClassName="articleTitle-title"/>
        <div className="">
          <NewsPreview title="02:00 ТНТ.Best" titleClassName="satya-title-one" addition="ТНТ International" additionClassName="satya-article"/>
          <NewsPreview title="02:15 Джинглики" titleClassName="satya-title-one" addition="Карусель INT" additionClassName="satya-article"/>
          <NewsPreview title="02:25 Наедине со всеми" titleClassName="satya-title-one" addition="Первый" additionClassName="satya-article"/>
        </div>
      </div>
      <div className="new">
        <ArticleTitle className="new-item articleTitle-container-row" title="Эфир" titleClassName="articleTitle-title"/>
        <div className="">
          <NewsPreview title="Управление как искуство" titleClassName="satya-title" addition="Успех" additionClassName="satya-article"/>
          <NewsPreview title="Ночью Мир в это время" titleClassName="satya-title" addition="earthTV" additionClassName="satya-article"/>
          <NewsPreview title="Андрей Возн..." titleClassName="satya-title" addition="Совершенно секретно" additionClassName="satya-article"/>
        </div>
      </div>
    </section>
  );
};
