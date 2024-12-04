import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/pages/Services";
import ServiceDetails from "./components/pages/ServiceDetails";
import { Provider } from 'react-redux';
import store from './components/store/store';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <div className="page">
              <Routes>
                <Route path="/" exact element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetails />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;