// useDispatch: Es un hook que nos permite enviar acciones al store.
// useSelector: Es un hook que nos permite leer información del store usando una función selectora.
import { useDispatch, useSelector } from "react-redux"
import { crearErrorMessage, onLogin, onLogout } from "../store/auth/authSlice"

// Este es un custom hook que sirve para centralizar el manejo del store
// Otra alternativa es crear un thunk con funciones que trabajaran con las acciones
export const useAuthStore=()=>{
    const {status, user, errorMessage}=useSelector(state=>state.auth)
    const dispatch=useDispatch()

    const startLogin = async({email,password})=>{
        try {
            const data = {email,password}
            const jsonData = await JSON.stringify(data)
            localStorage.setItem('user',jsonData)
            dispatch(onLogin(data))
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'))
            setTimeout(() => {
                dispatch(crearErrorMessage())
            }, 10);
        }
    }
    const startRegister = async({name, surname, email,password})=>{
        try {
            const data = {name, surname, email,password}
            const jsonData = await JSON.stringify(data)
            localStorage.setItem('user',jsonData)
            dispatch(onLogin(data))
        } catch (error) {
            dispatch(onLogout(error.response.data?.msg||'--'))
            setTimeout(() => {
                dispatch(crearErrorMessage())
            }, 10);
        }
    }
    const checkData = async()=>{
        try {
            const data = localStorage.getItem('user')
            const jsonData = await JSON.parse(data)
            dispatch(onLogin(jsonData))
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'))
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
        checkData
    }
}