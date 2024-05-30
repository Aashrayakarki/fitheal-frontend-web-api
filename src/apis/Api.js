import axios from "axios";

//creating backend Config!
const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": 'multipart/form-data',
    }
})

//Test API
export const testAPI = () => Api.get('/')

//Register API
export const registerUserApi = (data) => Api.post('/api/user/register', data)


//http://localhost:5000/test