import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        selectedPage: 1,
        pageInformations: {}
    },
    reducers: {
        setPageInformation: (state, { payload }) => {
            state.pageInformations = payload
        }
    }
}
)

export const {
    setPageInformation
} = moviesSlice.actions

export const selectMovies = state => state.moviesSlice
export const selectSelectedPage = state => selectMovies(state).selectedPage
export const selectPageInformation = state => selectMovies(state).pageInformations
export const selectResults = state => selectPageInformation(state).results
export default moviesSlice.reducer