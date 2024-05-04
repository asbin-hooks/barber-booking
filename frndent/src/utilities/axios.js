import axios from 'axios';

const CustomAxios = axios.create({
  baseURL: 'http://localhost:4444/',
  timeout: '5000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
export default CustomAxios;
