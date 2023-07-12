import { createSlice } from '@reduxjs/toolkit'

export const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        images: []
    },
    reducers: {
        onLoadImage: (state, {payload} ) => {
            state.images = payload
        },
    }
})


// Action creators are generated for each case reducer function
export const { onLoadImage } = imagesSlice.actions