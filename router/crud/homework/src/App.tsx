import React from "react";
import {
  Route,
  Routes,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import "./index.css"
import { Posts } from './components/Post/Posts';
import { Layout } from "./components/Layout/Layout";
import { CreatePosts } from "./components/CreatePosts/CreatePosts";
import { Card } from "./components/Card/Card";
import { PostPage } from "./components/PostPage/PostPage";
import { PostProvider } from './components/PostContext/PostContext';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/posts/new" element={<CreatePosts />} />
      </Route>
    )
  );
  return (
    <PostProvider>
      <RouterProvider router={routes} />
    </PostProvider>
  );
}

export default App;
