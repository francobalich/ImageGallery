import { configureStore } from "@reduxjs/toolkit"
import { act, renderHook, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { notAuthenticatedState } from "../fixtures/authStates"
import { testUserCredentials } from "../fixtures/testUser"
import { useAuthStore } from "../../src/hooks/useAuthStore"
import { authSlice } from "../../src/store/auth/authSlice"

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer
        },
        preloadedState: {
            auth: { ...initialState }
        }
    })
}
describe('Pruebas en useAuthStore', () => {
    beforeEach(()=>localStorage.clear())
    test('startLogin debe de realizar el login correctamente', async() => {
        const mockStore = getMockStore({ ...notAuthenticatedState })
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        })
        await act(async()=>{
            await result.current.startLogin({...testUserCredentials})
        })
        const {errorMessage, status, user}=result.current;
        expect({errorMessage, status, user}).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: expect.any(Object)
        })
    })
    test('startLogin debe de fallar la autenticación', async() => {
        const mockStore = getMockStore({ ...notAuthenticatedState })
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        })
        await act(async()=>{
            await result.current.startLogin({email:"test@gmail.com",password:"456789"})
        })
        const {errorMessage, status, user}=result.current;
        expect({errorMessage, status, user}).toEqual({
            errorMessage: expect.any(String),
            status: 'not-authenticated',
            user: {}
        })
        expect(localStorage.getItem('token')).toBe(null)
        waitFor(
            ()=>expect(result.current.errorMessage).toBe(undefined)
        )
    })
})