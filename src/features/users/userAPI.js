import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL API Django
const API_URL = axios.get('http://localhost:8000/api/users/')
;

// Асинхронный thunk для получения списка пользователей
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get(API_URL); // Запрос к вашему API
    return response.data; // Вернуть данные
  } catch (error) {
    console.error('Ошибка при загрузке пользователей:', error);
    throw error; // Бросить ошибку, если запрос не удался
  }
});
