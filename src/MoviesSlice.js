import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        pageInformations: {
            page: 0,
            results: [],
            total_results: 0,
            total_pages: 0
        },
        movieDetails: [],
        movieCredits: [],
        personDetails: [],
        personCredits: [],
        queryString: undefined
    },
    reducers: {
        initialFetch: ({ payload }) => {

        },
        setPageInformation: (state, { payload }) => {
            state.pageInformations = payload
        },
        setMovieDetails: (state, { payload }) => {
            state.movieDetails = payload
        },
        setMovieCredits: (state, { payload }) => {
            state.movieCredits = payload
        },
        setPersonDetails: (state, { payload }) => {
            state.personDetails = payload
        },
        setPersonCredits: (state, { payload }) => {
            state.personCredits = payload
        },
        changePage: ({ payload }) => {

        },
        setQuery: ({ payload }) => {

        }
    }
});

export const {
    initialFetch,
    setPageInformation,
    setMovieDetails,
    setMovieCredits,
    setPersonDetails,
    setPersonCredits,
    changePage,
    setQuery
} = moviesSlice.actions

export const selectMovies = state => state.movies
export const selectType = state => selectMovies(state).type
export const selectPageInformation = state => selectMovies(state).pageInformations
export const selectMovieDetails = state => selectMovies(state).movieDetails
export const selectMovieCredits = state => selectMovies(state).movieCredits
export const selectPersonDetails = state => selectMovies(state).personDetails
export const selectPersonCredits = state => selectMovies(state).personCredits
export default moviesSlice.reducer