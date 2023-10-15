import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"


export type Products = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

interface ProductsSliceState {
    isLoading: boolean;
    products: Products[];
    filterProducts: Products[];
}


const initialState: ProductsSliceState = {
    isLoading: false,
    products: [],
    filterProducts: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productStart: state => {
            state.isLoading = true
        },
        productSuccess: (state, action: PayloadAction<Products[]>) => {
            state.isLoading = false
            state.products = action.payload
        },
        productFilter: (state, action: PayloadAction<Products[]>) => {
            state.isLoading = false
            state.filterProducts = action.payload
        },
    }
})

export const {
    productStart,
    productSuccess,
    productFilter
} = productSlice.actions

export const selectProducts = (state: RootState) => state.product

export default productSlice.reducer