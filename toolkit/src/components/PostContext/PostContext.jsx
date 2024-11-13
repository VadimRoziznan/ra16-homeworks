import React, {
  createContext, useContext, useState, useEffect, useMemo,
} from 'react';

const PostContext = createContext(null);

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const contextValue = useMemo(() => ({
    posts,
    setPosts,
    selectedPost,
    setSelectedPost,
  }), [posts, selectedPost]);

  return (
    <PostContext.Provider value={contextValue}>
      {children}
    </PostContext.Provider>
  );
}

export const usePostContext = () => useContext(PostContext);
