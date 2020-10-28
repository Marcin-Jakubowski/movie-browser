import { createSlice } from "@reduxjs/toolkit";

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
        genres: [],
        queryString: "initial",
        status: "loading"

    },
    reducers: {
        initiateFetch: ({ payload }) => {

        },
        setStatus: (state, { payload }) => {
            state.status = payload
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
        setGenres: (state, { payload }) => {
            state.genres = payload
        },
        fetchGenresList: () => { },
        initiateMovieOrPersonFetch: () => {

        },
        inputChange: ({ payload }) => {

        },
        setQueryString: (state, { payload }) => {
            state.queryString = payload
        },
    }
});

export const {
    initiateFetch,
    setPageInformation,
    setMovieDetails,
    setMovieCredits,
    setPersonDetails,
    setPersonCredits,
    setGenres,
    fetchGenresList,
    initiateMovieOrPersonFetch,
    inputChange,
    setQueryString,
    setStatus,
} = moviesSlice.actions

export const selectMovies = state => state.movies;
export const selectType = state => selectMovies(state).type;
export const selectStatus = state => selectMovies(state).status
export const selectPageInformation = state => selectMovies(state).pageInformations;
export const selectMovieDetails = state => selectMovies(state).movieDetails;
export const selectMovieCredits = state => selectMovies(state).movieCredits;
export const selectPersonDetails = state => selectMovies(state).personDetails;
export const selectPersonCredits = state => selectMovies(state).personCredits;
export const selectGenres = state => selectMovies(state).genres;
export const selectQueryString = state => selectMovies(state).queryString;
export default moviesSlice.reducer;

