import axios from 'axios'
const API_URL="https://api.francobalich.com/api"

const userAPI = axios.create({
    baseURL:API_URL
})

userAPI.interceptors.request.use(config=>{
    config.headers={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})

export default userAPI