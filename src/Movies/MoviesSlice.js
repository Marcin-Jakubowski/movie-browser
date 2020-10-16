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
        movieDetails: [],
        movieCredits: [],
        personDetails: [],
        personCredits: []
    },
    reducers: {
        setPageInformation: (state, { payload }) => {
            state.pageInformations = payload
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
        }
    }
});

export const {
    setPageInformation,
    setSelectedPage,
    setMovieDetails,
    setMovieCredits,
    setPersonDetails,
    setPersonCredits
} = moviesSlice.actions

export const selectMovies = state => state.movies
export const selectSelectedPage = state => selectMovies(state).selectedPage
export const selectPageInformation = state => selectMovies(state).pageInformations
export const selectMovieDetails = state => selectMovies(state).movieDetails
export const selectMovieCredits = state => selectMovies(state).movieCredits
export const selectPersonDetails = state => selectMovies(state).personDetails
export const selectPersonCredits = state => selectMovies(state).personCredits
export default moviesSlice.reducer