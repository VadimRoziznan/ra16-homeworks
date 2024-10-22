import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editItem, deleteItem } from './redux/store';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleEdit = (item) => {
    dispatch(editItem(item));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>
          <span>{item.name} - {item.description}</span>
          <button onClick={() => handleEdit(item)}>Редактировать</button>
          <button onClick={() => handleDelete(item.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;