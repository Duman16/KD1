import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируем 'react-dom/client' для использования createRoot
import { Provider } from 'react-redux';
import store from './redux/crm'; // Путь к вашему store
import App from './App';
import './styles/styles.css';

// Используем createRoot вместо render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
