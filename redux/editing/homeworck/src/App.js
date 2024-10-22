// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store'; 
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList'; 

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Список элементов</h1>
        <ItemForm />
        <ItemList />
      </div>
    </Provider>
  );
};

export default App;