import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/layout/Layout';
import store from './components/store/store';
import HomePage from './components/pages/HomePage';
import FavoritesPage from './components/pages/FavoritesPage';
import MovieDetail from './components/movieCard/MovieDetail';
import { PostProvider } from './components/PostContext/PostContext';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies/:imdbID" element={<MovieDetail />} />
        <Route path="/favorite" element={<FavoritesPage />} />
      </Route>,
    ),
  );

  return (
    <Provider store={store}>
      <PostProvider>
        <RouterProvider router={routes} />
      </PostProvider>
    </Provider>
  );
}

export default App;
