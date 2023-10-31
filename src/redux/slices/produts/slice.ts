import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { Products, ProductsSliceState } from "./type"

const initialState: ProductsSliceState = {
    isLoading: false,
    products: [],
    filterProducts: [],
    productDetail: []
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
        productDetailSlice: (state, action: PayloadAction<Products[]>) => {
            state.isLoading = false
            state.productDetail = action.payload
        },

        postProductStart: state => {
            state.isLoading = true
        },
        postProductSuccess: (state, action) => {
            state.isLoading = false
            state.products = action.payload
        },
        postProductsFailure: state => {
            state.isLoading = false
        },
    }
})

export const {
    productStart,
    productSuccess,
    productFilter,
    productDetailSlice,
    postProductStart,
    postProductSuccess,
    postProductsFailure
} = productSlice.actions

export const selectProducts = (state: RootState) => state.product

export default productSlice.reducer