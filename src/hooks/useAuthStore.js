import { useDispatch, useSelector } from "react-redux"
import { crearErrorMessage, onChecking, onLogin, onLogout, onLogoutCalendar } from "../store/store"

export const useAuthStore=()=>{

    const {status, user, errorMessage}=useSelector(state=>state.auth)
    const dispatch=useDispatch()

    const startLogin = async({email,password})=>{
        dispatch(onChecking())
        try {
            const data = {email,password}
            localStorage.setItem('user',data.token)
            dispatch(onLogin({name:data.name, uid: data.uid}))
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'))
            setTimeout(() => {
                dispatch(crearErrorMessage())
            }, 10);
        }
    }
    const startRegister = async({name,email,password})=>{
        dispatch(onChecking())
        try {
            const data = {email,password}
            localStorage.setItem('user',data.token)
            dispatch(onLogin({name:data.name, uid: data.uid}))
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