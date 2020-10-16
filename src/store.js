import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from "./MoviesSlice"
import createSagaMiddleware from "redux-saga"
import { MoviesSaga } from "./MoviesSaga"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        movies: moviesSlice
    },
    middleware: [sagaMiddleware]
}
)

sagaMiddleware.run(MoviesSaga)

export default store