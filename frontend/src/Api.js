import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks'; // Your backend API URL

export const getTasks = () => {
    return axios.get(API_URL);
};

export const createTask = (taskData) => {
    return axios.post(API_URL, taskData);
};
