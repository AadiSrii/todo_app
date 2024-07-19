import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const register = async (username, password) => {
    await axios.post(`${API_URL}/register`, { username, password });
};

export const login = async (username, password) => {
    const { data } = await axios.post(`${API_URL}/login`, { username, password });
    localStorage.setItem('token', data.token);
};

export const getToken = () => localStorage.getItem('token');
