import { put, debounce, call, takeLatest, delay } from "redux-saga/effects"
import { fetchFromApi } from "./fetchFromApi"
import { fetchGenresList, initiateFetch, inputChange, setGenres, setPageInformation, setQueryString, setStatus } from "./MoviesSlice"
import { apiKey, moviesKey, peopleKey } from "./keys"
import Axios from "axios"

function* fetchHandler(action) {
    yield put(setStatus("loading"))
    const page = yield action.payload.page
    const type = yield action.payload.type
    const query = yield action.payload.query
    yield delay(1000)
    if (query) {
        if (type === moviesKey) {
            try {
                const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/search/movie??", page, query)
                yield put(setPageInformation(data))
                yield put(setStatus("success"))
            } catch (error) {
                yield put(setStatus("failed"))
            };
        }
        if (type === peopleKey) {
            try {
                const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/search/person?", page, query)
                yield put(setPageInformation(data))
                yield put(setStatus("success"))
            } catch (error) {
                yield put(setStatus("failed"))
            };
        }
    } else {
        if (type === moviesKey) {
            try {
                const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/movie/popular?", page)
                yield put(setPageInformation(data))
                yield put(setStatus("success"))
            }
            catch (error) {
                yield put(setStatus("failed"))
            }
        }
        if (type === peopleKey) {
            try {
                const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/person/popular?", page)
                yield put(setPageInformation(data))
                yield put(setStatus("success"))
            }
            catch (error) {
                yield put(setStatus("failed"))
            }
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

function* fetchGenresFromAPI() {
    try {
        const response = yield Axios.get("https://api.themoviedb.org/3/genre/movie/list?", {
            params: {
                api_key: apiKey
            }
        })
        yield put(setGenres(response.data));
    } catch (error) {
        console.log(error)
    }
}

export function* setGenresList() {
    yield takeLatest(fetchGenresList.type, fetchGenresFromAPI)
}