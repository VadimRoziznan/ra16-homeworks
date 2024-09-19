import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CreatePosts/createPost.scss"

export const CreatePosts = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:7070/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        navigate('/');
      } else {
        console.error('Ошибка при сохранении поста');
      }
    } catch (error) {
      console.error('Ошибка при сохранении поста:', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className='card-container'>
      <button className='close-button' onClick={handleCancel}></button>
      <form className='new-post' onSubmit={handleSubmit}>
        <input className='post-field'
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Введите текст поста"
          required
        />
        <div className='publish-button-container'>
          <button className='publish-button' type="submit">Опубликовать</button>
        </div>
      </form>
    </div>
  );
};