import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store'; 
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList'; 
import Filter from './components/Filter';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Список элементов</h1>
        <p><Filter/></p>
        <ItemForm />
        <ItemList />
      </div>
    </Provider>
  );
};

export default App;