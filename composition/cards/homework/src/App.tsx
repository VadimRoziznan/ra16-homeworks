import "./App.css";
import { Card } from "./components/card";
import React from "react";

const someImage = "/default-image.png";

function App() {
  return (
    <div className="App">
      <Card
        imgSrc={ someImage }
        imgAlt="someImage"
        title="Card title"
        info="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonHref="#"
        buttonTitle="Go somewhere"/>
      <Card
        title="Card title"
        info="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonHref="#"
        buttonTitle="Go somewhere"/>
      <Card
        title="Card title"
        info="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonHref="#"
        buttonTitle="Go somewhere"/>
      <Card
        imgSrc={ someImage }
        imgAlt="someImage"
        title="Card title"
        info="Some quick example text to build on the card title and make up the bulk of the card's content."
        buttonHref="#"
        buttonTitle="Go somewhere"/>
    </div>
  );
}

export default App;
