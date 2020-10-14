import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        selectedPage: 1,
        pageInformations: {
            page: 0,
            results: [],
            total_results: 0,
            total_pages: 0
        },
        searchResults: {
            page: 0,
            results: [],
            total_results: 0,
            total_pages: 0
        },
        queryString: undefined
    },
    reducers: {
        setPageInformation: (state, { payload }) => {
            state.pageInformations = payload
        },
        setSearchResults: (state, { payload }) => {
            state.searchResults = payload
        },
        setSelectedPage: (state, { payload }) => {
            switch (payload) {
                case "first":
                    state.selectedPage = 1;
                    break;
                case "previous":
                    state.selectedPage--
                    break;
                case "next":
                    state.selectedPage++
                    break;
                default:
                    state.selectedPage = payload
            }
        },
        setQueryString: (state, { payload }) => {
            state.queryString = payload
            if (payload === ""){
                state.queryString = undefined 
            }
        },
        setQueryParameter: ({payload}) => {
        }
    }
}
)

export const {
    setPageInformation,
    setSearchResults,
    setSelectedPage,
    setQueryString,
    setQueryParameter
} = moviesSlice.actions

export const selectMovies = state => state.movies
export const selectSelectedPage = state => selectMovies(state).selectedPage
export const selectSearchResults = state => selectMovies(state).searchResults
export const selectPageInformation = state => selectMovies(state).pageInformations
export const selectQueryString = state => selectMovies(state).queryString
export default moviesSlice.reducer