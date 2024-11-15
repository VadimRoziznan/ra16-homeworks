import axios from 'axios';
import apiUrl from '../config/api';

const apiService = {
  async getData(name) {
    const response = await axios.get(`${apiUrl}s=${name}`);

    return response.data;
  },
  async getDataById(id) {
    const response = await axios.get(`${apiUrl}i=${id}`);

    return response.data;
  },
};

export default apiService;
