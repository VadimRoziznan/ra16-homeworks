import "./App.css";
import { ArticleTitle } from "./components/articleTitle";
import { Satya } from "./components/satya";
import { Image } from "./components/img/image";

const someImage: string = "/logo192.png";

function App() {
  return (
    <div className="App">
      <header className="header-container">
        <div className="header-item">
          <ArticleTitle className="articleTitle-container-row" title="Сейчас в СМИ" titleClassName="articleTitle-title" articl="в Германии Рекомендуем" date="31 июля, среда 02:32"/>
          <Satya containerClassName="satya-container" image={ someImage } imageClassName="satay-img" title="Путин упростил получение автомобильных номеров" titleClassName="satya-title"/>
          <Satya containerClassName="satya-container" image={ someImage } imageClassName="satay-img" title="Путин упростил получение автомобильных номеров" titleClassName="satya-title"/>
          <Satya containerClassName="satya-container" image={ someImage } imageClassName="satay-img" title="Путин упростил получение автомобильных номеров" titleClassName="satya-title"/>
          <Satya containerClassName="satya-container" image={ someImage } imageClassName="satay-img" title="Путин упростил получение автомобильных номеров" titleClassName="satya-title"/>
          <Satya containerClassName="satya-container" image={ someImage } imageClassName="satay-img" title="Путин упростил получение автомобильных номеров" titleClassName="satya-title"/>
          <ul className="horizontal-list">
            <li className="item-horizontal-list">
              <Satya containerClassName="satya-container" header="USD MOEX" headerClassName="satay-header" title="63,52" titleClassName="satya-title" addition="+0,09" additionClassName="satya-article"/>
            </li>
            <li className="item-horizontal-list">
              <Satya containerClassName="satya-container" header="USD MOEX" headerClassName="satay-header" title="63,52" titleClassName="satya-title" addition="+0,09" additionClassName="satya-article"/>
            </li>
            <li className="item-horizontal-list">
              <Satya containerClassName="satya-container" header="USD MOEX" headerClassName="satay-header" title="63,52" titleClassName="satya-title" addition="+0,09" additionClassName="satya-article"/>
            </li>
          </ul>
        </div>
        <div className="header-item">
          <Image className="header-img" src={ someImage } alt="alt"/>
          <ArticleTitle className="articleTitle-container-row" title="Работа над ошибками"/>
          <Satya containerClassName="satya-container" title="Смотрите на Яндексе и запоминайте"/>
        </div>
      </header>
      <div className="search">
        <div className="search-header">
          <ArticleTitle className="blue space-between-words" title="Видео"/>
          <ArticleTitle className="blue space-between-words" title="Картинки"/>
          <ArticleTitle className="blue space-between-words" title="Новости"/>
          <ArticleTitle className="blue space-between-words" title="Карты"/>
          <ArticleTitle className="blue space-between-words" title="Маркет"/>
          <ArticleTitle className="blue space-between-words" title="Переводчик"/>
          <ArticleTitle className="blue space-between-words" title="Эфир"/>
          <ArticleTitle className="blue space-between-words" title="ещё"/>
        </div>
        <div className="search-field">
          <span className="title-search"><span className="red">Я</span>ндекс</span>
          <input type="search" className="search-input" placeholder="Введите текст для поиска"/>
          <button className="button-search">Найти</button>
          <Satya containerClassName="left-indent" title="Найдётся всё. Например, " titleClassName="satya-title" addition="фаза луны сегодня" additionClassName="satya-title grey"/>
        </div>
      </div>
      <div className="baner">
        <Image className="baner-img" src="https://storage.mds.yandex.net/get-bstor/10252460/0031572d-d884-4ea3-bfd5-4cefceb83f15.jpeg" alt="alt"/>
      </div>
      <section className="news">
        <div className="new">
          <ArticleTitle className="new-item articleTitle-container-row" title="Погода" titleClassName="articleTitle-title"/>
          <div className="info">
            <Image className="weather-img" src={ someImage } alt="alt"/>
            <Satya containerClassName="weather-info" title="Утром +17" titleClassName="satya-title"/>
          </div>
          <ArticleTitle className="new-item articleTitle-container-row" title="Посещаемое" titleClassName="articleTitle-title"/>
          <div className="">
            <Satya header="Недвижимость" headerClassName="info-item" title=" - о сталинках" titleClassName="satya-title"/>
            <Satya header="Маркет" headerClassName="info-item" title=" - люстры и светильники" titleClassName="satya-title"/>
            <Satya header="Авто.ру" headerClassName="info-item" title=" - привод 4х4 до 500 000" titleClassName="satya-title"/>
          </div>
        </div>
        <div className="new">
          <ArticleTitle className="new-item articleTitle-container-row" title="Карта Германии" titleClassName="articleTitle-title"/>
          <div className="">
            <Satya title="Расписание" titleClassName="satya-title-one"/>
          </div>
          <ArticleTitle className="new-item articleTitle-container-row" title="Карта Германии" titleClassName="articleTitle-title"/>
          <div className="">
            <Satya title="02:00 ТНТ.Best" titleClassName="satya-title-one" addition="ТНТ International" additionClassName="satya-article"/>
            <Satya title="02:15 Джинглики" titleClassName="satya-title-one" addition="Карусель INT" additionClassName="satya-article"/>
            <Satya title="02:25 Наедине со всеми" titleClassName="satya-title-one" addition="Первый" additionClassName="satya-article"/>
          </div>
        </div>
        <div className="new">
          <ArticleTitle className="new-item articleTitle-container-row" title="Эфир" titleClassName="articleTitle-title"/>
          <div className="">
            <Satya image={ someImage } imageClassName="satay-img" title="Управление как искуство" titleClassName="satya-title" addition="Успех" additionClassName="satya-article"/>
            <Satya image={ someImage } imageClassName="satay-img" title="Ночью Мир в это время" titleClassName="satya-title" addition="earthTV" additionClassName="satya-article"/>
            <Satya image={ someImage } imageClassName="satay-img" title="Андрей Возн..." titleClassName="satya-title" addition="Совершенно секретно" additionClassName="satya-article"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
