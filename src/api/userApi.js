import axios from 'axios'
import { getEnvVariables } from '../helper/getEnvVariables'
const {VITE_API_URL} = getEnvVariables()

const userAPI = axios.create({
    baseURL:VITE_API_URL
})

userAPI.interceptors.request.use(config=>{
    config.headers={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})

export default userAPI