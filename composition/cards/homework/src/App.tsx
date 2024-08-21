import "./App.css";
import { Card } from "./components/card";

const someImage: string = "/default-image.png";

function App() {
  return (
    <div className="App">
      <Card 
        image={ someImage }
        title="Card title"
        info="Some quick example text to build on the card title and make up the bulk of the card's content."/>
      <Card 
        title="Card title"
        info="Some quick example text to build on the card title and make up the bulk of the card's content."/>
      <Card 
        title="Card title"
        info="Some quick example text to build on the card title and make up the bulk of the card's content."/>
      <Card 
        image={ someImage }
        title="Card title"
        info="Some quick example text to build on the card title and make up the bulk of the card's content."/>
    </div>
  );
}

export default App;
