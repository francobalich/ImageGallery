// Configuración de axios para que todas las APIs utilicen el mismo URL
// Y que los Headers usen el Header x-token en donde estara el JWT
import axios from 'axios'

const API_URL = "https://api.francobalich.com/api"

const userAPI = axios.create({
    baseURL: API_URL
})

userAPI.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config
})

export default userAPI