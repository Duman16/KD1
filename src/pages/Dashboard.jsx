import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Ошибка загрузки данных:', error);
            });
    }, []);

    return (
        <div className="dashboard">
            <h1>CRM Dashboard</h1>
            <table className="crm-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Уровень спорта</th>
                        <th>Клуб</th>
                        <th>Тренер</th>
                        <th>Достижения</th>
                        <th>Статус</th>
                        <th>Прогресс</th>
                        <th>Дата регистрации</th>
                        <th>История тренеров</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name || 'Не указано'} {user.last_name || 'Не указано'}</td>
                            <td>{user.level}</td>
                            <td>{user.club || 'Не указано'}</td>
                            <td>{user.coach || 'Не указан'}</td>
                            <td>{user.achievement || 'Не указано'}</td> {/* Проверьте, чтобы это поле присутствовало на бэкенде */}
                            <td>{user.is_active ? 'Активен' : 'Не активен'}</td>
                            <td>{user.progress || 'Не указан'}</td> {/* Проверьте, чтобы это поле присутствовало на бэкенде */}
                            <td>{new Date(user.date_joined).toLocaleDateString() || 'Не указана'}</td>
                            <td>{user.coach_history || 'Не указана'}</td> {/* Проверьте, чтобы это поле присутствовало на бэкенде */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
