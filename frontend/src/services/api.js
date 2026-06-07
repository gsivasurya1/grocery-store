import axios from "axios";

const api = axios.create({
  baseURL:
    "https://grocery-store-backend-nv1l.onrender.com/api",
});

export default api;