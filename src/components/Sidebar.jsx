import React from 'react';

const Sidebar = () => (
    <aside className="sidebar">
        <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/attendance-log">Attendance Log</a></li> {/* Добавляем ссылку на журнал посещаемости */}
        </ul>
    </aside>
);

export default Sidebar;
