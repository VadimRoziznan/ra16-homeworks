import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePostContext } from '../PostContext/PostContext';
import "../PostPage/postPage.scss"
import apiService from '../../services/apiService';

export const PostPage: React.FC = () => {
  const { id } = useParams();
  const context = usePostContext();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState('');

  if (!context) {
    return <div>Контекст не определен</div>;
  }

  const post = context.posts.find((p) => p.id === Number(id));

  if (!post) {
    return <div>Пост не найден</div>;
  }

  const handleDelete = async () => {
    try {
      await apiService.deleteData(id);
      navigate('/');
    } catch (error) {
      console.error('Ошибка при удалении поста:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setContent(post.content);
  };

  const handleSave = async () => {
    try {
      const response = await apiService.putData(id, { id: Number(id), content });
      if (response) {
        setIsEditing(false);
        context.posts = context.posts.map((p) => (p.id === Number(id) ? { ...p, content } : p));
      } else {
        console.error('Ошибка при сохранении поста');
      }
    } catch (error) {
      console.error('Ошибка при сохранении поста:', error);
    }
    navigate('/');
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className='card-container'>
        <h1>Редактирование поста {id}</h1>
        <input className='post-field'
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
        />
        <div className='button-container'>
          <button className='button' onClick={handleCancel}>Отмена</button>
          <button className='button' onClick={handleSave}>Сохранить</button>
        </div>
      </div>
    );
  }

  return (
    <div className='card-container'>
      <h1>Страница поста {id}</h1>
      {post.content}
      <div className='button-container'>
        <button className='delete button' onClick={handleDelete}>Удалить</button>
        <button className='edit button' onClick={handleEdit}>Редактировать</button>
      </div>
    </div>
  );
};