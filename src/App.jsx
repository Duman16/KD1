import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import AttendanceLog from './pages/AttendanceLog';  // Импортируем компонент журнал посещаемости
import './styles/styles.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="main-content">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/attendance-log" element={<AttendanceLog />} /> {/* Добавляем маршрут для журнала посещаемости */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
