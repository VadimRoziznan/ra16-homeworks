import axios from 'axios';
import { apiUrl } from '../config/api';

const apiService = {
  async getData() {
    const response = await axios.get(`${apiUrl}/posts`);
    return response.data;
  },

  async postData(data) {
    const response = await axios.post(`${apiUrl}/posts`, data);
    return response.data;
  },

  async putData(id, data) {
    console.log(apiUrl);
    const response = await axios.put(`${apiUrl}/posts/${id}`, data);
    return response.data;
  },

  async deleteData(id) {
    console.log(apiUrl);
    const response = await axios.delete(`${apiUrl}/posts/${id}`);
    return response.data;
  },
};

export default apiService;