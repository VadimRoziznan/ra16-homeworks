import React from 'react';
import './error.css';

const Error = ({ message, onRetry }) => {
  return (
    <div className='error'>
      <div className='error-content'>
        <p className='message'>{"Произошла ошибка!"}</p>
        <button className='retry-button' onClick={onRetry}>Повторить запрос</button>
      </div>
    </div>
  );
};

export default Error;