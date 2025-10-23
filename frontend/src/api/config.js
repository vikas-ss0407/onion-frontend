const API_BASE_URL = "https://onion-backend-gmab.onrender.com/api"; 

export const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export default API_BASE_URL;
