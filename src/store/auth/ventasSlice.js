import { createSlice } from '@reduxjs/toolkit'

export const ventasSlice = createSlice({
    name: 'ventas',
    initialState: {
        ventas: [],
        cantVentas: 0,
        cliente: {},
        vendedor: {}
    },
    reducers: {
        onCargarVenta: (state, { payload }) => {
            state.ventas = payload.ventas
            state.cantVentas = payload.cantVentas
            state.cliente = payload.cliente
            state.vendedor = payload.vendedor
        },
        onCargarVededor: (state, { payload }) => {
            state.ventas = []
            state.cliente = {}
            state.vendedor = payload.vendedor
        }
    }
})


// Action creators are generated for each case reducer function
export const { onCargarVenta, onCargarVededor } = ventasSlice.actions