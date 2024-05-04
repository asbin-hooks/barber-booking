import { jwtDecode } from 'jwt-decode';

export const getId = () => {
  const token = localStorage.getItem('token');
  const decode = jwtDecode(token);
  return decode.id;
};
export const isTokenValid = () => {
  const token = localStorage.getItem('token');
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded && decoded.exp && decoded.exp > currentTime) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return e;
  }
};

export const checkRole = role => {
  const token = localStorage.getItem('token');
  try {
    const decoded = jwtDecode(token);
    return role.includes(decoded.role);
  } catch (e) {
    return false;
  }
};
