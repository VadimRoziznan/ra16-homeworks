import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from './redux/store';

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilterValue] = useState('');

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Фильтр"
    />
  );
};

export default Filter;