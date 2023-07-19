// Configuración de axios para que todas las APIs utilicen el mismo URL
// Y que los Headers usen el Header x-token en donde estara el JWT
// Para instalar axios tienen que usar npm install axios
import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables'
// Se lee el VITE_API_URL del archivo .env
const { VITE_API_URL } = getEnvVariables()
const API_URL = VITE_API_URL

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