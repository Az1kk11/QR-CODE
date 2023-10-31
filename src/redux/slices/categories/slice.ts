import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { Categories, CategoriesSliceState } from "./type"

const initialState: CategoriesSliceState = {
    isLoading: false,
    categories: [],
}

export const categoriesSlice = createSlice({
    name: 'categorie',
    initialState,
    reducers: {
        categoriesStart: state => {
            state.isLoading = true
        },
        categoriesSuccess: (state, action: PayloadAction<Categories[]>) => {
            state.isLoading = false
            state.categories = action.payload
        },

        postCategorieStart: state => {
            state.isLoading = true
        },
        postCategorieSuccess: state => {
            state.isLoading = false
        },
        postCategorieFailure: state => {
            state.isLoading = false
        },
    }
})

export const {
    categoriesStart,
    categoriesSuccess,
    postCategorieStart,
    postCategorieSuccess,
    postCategorieFailure
} = categoriesSlice.actions

export const selectCategories = (state: RootState) => state.categorie

export default categoriesSlice.reducer