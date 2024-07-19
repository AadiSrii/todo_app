import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TaskList from './components/TaskList';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import "./App.css"

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage setToken={setToken} />} />
          <Route path="/tasks" element={token ? <TaskList /> : <LoginPage setToken={setToken} />} />
          <Route path="/admin" element={token ? <AdminPage /> : <LoginPage setToken={setToken} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
``
