import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, cancelEdit } from './redux/store';

const ItemForm = () => {
  const dispatch = useDispatch();
  const currentItem = useSelector(state => state.currentItem);

  const [formData, setFormData] = useState({ name: '', description: '' });

  useEffect(() => {
    if (currentItem) {
      setFormData(currentItem);
    } else {
      setFormData({ name: '', description: '' });
    }
  }, [currentItem]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentItem) {
      dispatch(updateItem(formData));
    } else {
      dispatch(addItem({ ...formData, id: Date.now() }));
    }
    setFormData({ name: '', description: '' });
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  const handleKeyPress = (e) => {
    const charCode = e.charCode;
    const char = String.fromCharCode(charCode);
    const isNumber = /\d/.test(char);
    const isDot = char === '.';
    const value = e.target.value;
  
    if (!isNumber && !isDot) {
      e.preventDefault();
    } else if (isDot && value.includes('.')) {
      e.preventDefault();
    } else if (isNumber && value.includes('.') && value.split('.')[1].length >= 2) {
      e.preventDefault();
    } else if (value.length === 1 && value === '0' && char !== '.' && char !== '') {
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Задача"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Стоимость"
        autoComplete="off"
        required
      />
      <button type="submit">Сохранить</button>
      {currentItem && <button type="button" onClick={handleCancel}>Отмена</button>}
    </form>
  );
};

export default ItemForm;