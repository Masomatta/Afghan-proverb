import axios from "axios"
const api = axios.create({
    baseURL: 'https://afghan-proverb.onrender.com/api/',
    timeout:5000,
    withCredentials:true,
})

export default api;
