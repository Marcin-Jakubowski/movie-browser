import { put, debounce, call, takeLatest } from "redux-saga/effects"
import { fetchFromApi } from "./fetchFromApi"
import { changePage, initialFetch, setPageInformation, setQuery } from "./MoviesSlice"



function* fetchHandler(action) {
    const page = yield action.payload.page
    const type = yield action.payload.type
    const query = yield action.payload.query
    if (query) {
        if (type === "movies") {
            const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/search/movie??", page, query)
            yield put(setPageInformation(data))
        }
        if (type === "people") {
            const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/search/person?", page, query)
            yield put(setPageInformation(data))
        }
    } else {
        if (type === "movies") {
            const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/movie/popular?", page)
            yield put(setPageInformation(data))
        }
        if (type === "people") {
            const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/person/popular?", page)
            yield put(setPageInformation(data))
        }
    }

}


export function* MoviesSaga() {
    yield takeLatest(initialFetch.type, fetchHandler)
    yield takeLatest(changePage.type, fetchHandler)
    yield debounce(500, setQuery.type, fetchHandler);
}