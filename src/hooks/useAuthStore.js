import { useDispatch, useSelector } from "react-redux"
import { crearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice"

export const useAuthStore=()=>{

    const {status, user, errorMessage}=useSelector(state=>state.auth)
    const dispatch=useDispatch()

    const startLogin = async({email,password})=>{
        dispatch(onChecking())
        try {
            const data = {email,password}
            localStorage.setItem('user',data.token)
            dispatch(onLogin(data))
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'))
            setTimeout(() => {
                dispatch(crearErrorMessage())
            }, 10);
        }
    }
    const startRegister = async({name, surname, email,password})=>{
        dispatch(onChecking())
        try {
            const data = {name, surname, email,password}
            localStorage.setItem('user',data.token)
            dispatch(onLogin(data))
        } catch (error) {
            dispatch(onLogout(error.response.data?.msg||'--'))
            setTimeout(() => {
                dispatch(crearErrorMessage())
            }, 10);
        }
    }
    const startLogout=async()=>{
        localStorage.clear()
        dispatch(onLogout())
    }
    return{
        //* Propiedades
        errorMessage,
        status,
        user,
        //* Métodos
        startLogin,
        startLogout,
        startRegister,
    }
}