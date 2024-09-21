import React, { useEffect } from 'react';
import { Card } from '../Card/Card';
import { Link } from 'react-router-dom';
import { usePostContext } from '../PostContext/PostContext';
import "./post.scss"
import apiService from '../../services/apiService';

interface IPost {
  id: number;
  content: string;
}

export const Posts = () => {
  const context = usePostContext();

  if (!context) {
    return <div>Контекст не определен</div>;
  }

  const { posts, setPosts, setSelectedPost } = context;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await apiService.getData();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post: IPost) => (
        <div key={post.id}>
          <Link className='link' to={`/post/${post.id}`} onClick={() => setSelectedPost(post)}>
            <Card id={post.id} content={post.content} />
          </Link>
        </div>
      ))}
    </div>
  );
};