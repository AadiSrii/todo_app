import axios from 'axios';
import { getToken } from './auth';

const API_URL = 'http://localhost:4000';

const authHeader = () => ({ headers: { 'x-access-token': getToken() } });

export const getTasks = async () => {
    const { data } = await axios.get(`${API_URL}/tasks`, authHeader());
    return data;
};

export const addTask = async (task) => {
    const { data } = await axios.post(`${API_URL}/tasks`, task, authHeader());
    return data;
};

export const updateTask = async (id, task) => {
    const { data } = await axios.put(`${API_URL}/tasks/${id}`, task, authHeader());
    return data;
};

export const deleteTask = async (id) => {
    const { data } = await axios.delete(`${API_URL}/tasks/${id}`, authHeader());
    return data;
};
