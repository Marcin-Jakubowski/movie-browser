import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        selectedPage: 5,
        pageInformations: {
            page: 0,
            results: [],
            total_results: 0,
            total_pages: 0
        }
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

export const selectMovies = state => state.movies
export const selectSelectedPage = state => selectMovies(state).selectedPage
export const selectPageInformation = state => selectMovies(state).pageInformations
export default moviesSlice.reducer