import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import product from './slices/produts/slice'
import categorie from './slices/categories/slice'

export const store = configureStore({
    reducer: {
        product,
        categorie
    }
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()