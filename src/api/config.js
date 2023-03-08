const API_URL = 'http://127.0.0.1:3000/';

// saving user_name in the browser's local storage for future use
const USERNAME = localStorage.getItem('user_name') || 'guest';
const isLogged = localStorage.getItem('user_name') || false;
const login = (username) => {
  localStorage.setItem('user_name', username);
};
const logout = () => {
  localStorage.removeItem('user_name');
  window.location = '/login';
};
export {
  API_URL, USERNAME, isLogged, login, logout,
};
