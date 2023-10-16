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
        }
    }
})

export const {
    categoriesStart,
    categoriesSuccess,
} = categoriesSlice.actions

export const selectCategories = (state: RootState) => state.categorie

export default categoriesSlice.reducer