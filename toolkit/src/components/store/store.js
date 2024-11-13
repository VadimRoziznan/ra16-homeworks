import { configureStore, createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    currentItem: null,
    favorites: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    editItem: (state, action) => {
      state.currentItem = action.payload;
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
      state.currentItem = null;
    },
    cancelEdit: (state) => {
      state.currentItem = null;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addFavorite: (state, action) => {
      const exists = state.favorites.find((item) => item.imdbID === action.payload.imdbID);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((item) => item.imdbID !== action.payload);
    },
  },
});

export const {
  addItem, editItem, updateItem, cancelEdit, deleteItem, addFavorite, removeFavorite,
} = itemsSlice.actions;

const store = configureStore({
  reducer: itemsSlice.reducer,
});

export default store;
