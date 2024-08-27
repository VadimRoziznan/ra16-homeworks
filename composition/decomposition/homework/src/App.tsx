import "./App.css";
import { Image } from "./components/img/image";
import { Header } from "./components/header";
import { Navigation } from "./components/navigation";
import { Search } from "./components/search";
import { News } from "./components/news/News";


function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Search/>
      <div className="baner">
        <Image className="baner-img" src="https://storage.mds.yandex.net/get-bstor/10252460/0031572d-d884-4ea3-bfd5-4cefceb83f15.jpeg" alt="alt"/>
      </div>
      <News/>
    </div>
  );
}

export default App;
