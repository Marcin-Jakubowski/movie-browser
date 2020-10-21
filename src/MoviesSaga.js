import { put, debounce, call, takeLatest } from "redux-saga/effects"
import { fetchFromApi } from "./fetchFromApi"
import { initiateFetch, inputChange, setPageInformation, setQueryString, } from "./MoviesSlice"
import {moviesKey, peopleKey} from "./keys"



function* fetchHandler(action) {
    const page = yield action.payload.page
    const type = yield action.payload.type
    const query = yield action.payload.query
    if (query) {
        if (type === moviesKey) {
            const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/search/movie??", page, query)
            yield put(setPageInformation(data))
        }
        if (type === peopleKey) {
            const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/search/person?", page, query)
            yield put(setPageInformation(data))
        }
    } else {
        if (type === moviesKey) {
            const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/movie/popular?", page)
            yield put(setPageInformation(data))
        }
        if (type === peopleKey) {
            const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/person/popular?", page)
            yield put(setPageInformation(data))
        }
    }

}

function* inputChangeHandler(action) {
    const payload = yield action.payload
    yield put(setQueryString(payload))
}


export function* MoviesSaga() {
    yield takeLatest(initiateFetch.type, fetchHandler)
    yield debounce(500, inputChange.type, inputChangeHandler)
}