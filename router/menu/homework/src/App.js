import './App.css';
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from './conponents/menu/Menu';
import { HomePage } from './conponents/homePage/HomePage';
import { DriftPage } from './conponents/driftPage/DriftPage';
import { TimeAttackPage } from './conponents/timeAttackPage/TimeAttackPage';
import { ForzaPage } from './conponents/ForzaPage/ForzaPage';


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
