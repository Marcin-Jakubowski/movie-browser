import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fetchMoviesAndPeopleFromAPI, MoviesSaga, setGenresList } from "./MoviesSaga";
import moviesSlice from "./MoviesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesSlice
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(MoviesSaga);
sagaMiddleware.run(setGenresList);
sagaMiddleware.run(fetchMoviesAndPeopleFromAPI);

export default store;