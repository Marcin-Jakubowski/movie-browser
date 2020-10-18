import { put, debounce, call, takeLatest } from "redux-saga/effects"
import { fetchFromApi } from "./fetchFromApi"
import { changePage, checkIfFetchPopular, setPageInformation, setQueryParameter, setQueryString } from "./MoviesSlice"

function* checkIfFetchPopularHandler(action) {
    const page = yield action.payload.page
    const type = yield action.payload.type
    if (type === "movies") {
        const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/movie/popular?", page)
        yield put(setPageInformation(data))
    }
    if (type === "people") {
        const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/person/popular?", page)
        yield put(setPageInformation(data))
    }
}

function* changePageHandler(action) {
    const page = yield action.payload.page
    const type = yield action.payload.type
    if (type === "movies") {
        const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/movie/popular?", page)
        yield put(setPageInformation(data))
    }
    if (type === "people") {
        const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/person/popular?", page)
        yield put(setPageInformation(data))
    }


}

function* setQueryHandler(action) {
    const page = yield action.payload.page
    const type = yield action.payload.type
    if (type === "movies") {
        const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/movie/popular?", page)
        yield put(setPageInformation(data))
    }
    if (type === "people") {
        const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/person/popular?", page)
        yield put(setPageInformation(data))
    }

}


export function* MoviesSaga() {
    yield takeLatest(checkIfFetchPopular.type, checkIfFetchPopularHandler)
    yield takeLatest(changePage.type, changePageHandler)
    yield debounce(500, setQuery.type, setQueryHandler);
}