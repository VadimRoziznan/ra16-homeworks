import React from 'react';
import { createContext, useContext, useState } from 'react';

interface IPost {
  id: number;
  content: string;
}

interface IPostContext {
  posts: IPost[];
  setPosts: (posts: IPost[]) => void;
  selectedPost: IPost | null;
  setSelectedPost: (post: IPost | null) => void;
}

const PostContext = createContext<IPostContext | null>(null);

interface PostProviderProps {
  children: React.ReactNode;
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

  return (
    <PostContext.Provider value={{ posts, setPosts, selectedPost, setSelectedPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);