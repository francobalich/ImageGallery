import { createSlice } from '@reduxjs/toolkit';

// Este es un archivo en donde se encuentra la lógica del estado que vamos a trabajar en el store de redux
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'authenticated', 'not-authenticated'
        user: {},
        images:[],
        errorMessage: undefined
    },
    // Los reducers son funciones de dos parametros, un estado inicial y una accion
    // Las acciones o actions son bloques de información que se envian desde la app al store
    reducers: {
        onLogin: (state,{payload}) => {
            state.status = 'authenticated'
            state.user = payload
            images:[]
            state.errorMessage = undefined
        },
        onLogout: (state, { payload }) => {
            state.status = 'not-authenticated'
            state.user = {}
            images:[]
            state.errorMessage = payload
        },
        crearErrorMessage: (state) => {
            state.errorMessage = undefined
        },
        onLoadImages: (state,{payload}) => {
            images:payload
        }
        /*crearErrorMessage: (state,{ payload }) => {
            state.errorMessage = payload
        }*/
    }
});

// Action creators are generated for each case reducer function
export const { onLogin, onLogout, crearErrorMessage, onLoadImages } = authSlice.actions;