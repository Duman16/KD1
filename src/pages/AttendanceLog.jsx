import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceLog = () => {
    const [attendanceLog, setAttendanceLog] = useState([]);

    // Загрузка данных о посещаемости
    useEffect(() => {
        axios.get('http://localhost:8000/api/attendances/')
            .then((response) => setAttendanceLog(response.data))
            .catch((error) => console.error('Ошибка загрузки журнала посещаемости:', error));
    }, []);

    return (
        <div className="attendance-log">
            <h2>Журнал посещаемости</h2>
            <table>
                <thead>
                    <tr>
                        <th>Пользователь</th>
                        <th>Дата</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceLog.length > 0 ? (
                        attendanceLog.map((attendance) => (
                            <tr key={attendance.id}>
                                <td>{attendance.user}</td>
                                <td>{attendance.date}</td>
                                <td>{attendance.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">Нет записей о посещаемости</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceLog;
