import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from "./Movies/MoviesSlice"

const store = configureStore({
    reducer: {
        movies: moviesSlice
    }
})

export default store