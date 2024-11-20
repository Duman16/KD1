import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';  // Путь к вашему userSlice

const store = configureStore({
  reducer: {
    users: userReducer, // Добавьте нужные редьюсеры
  },
});

export default store;
