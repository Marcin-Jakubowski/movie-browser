import { put, debounce, call, takeLatest, delay } from "redux-saga/effects"
import { fetchFromApi } from "./fetchFromApi"
import { initiateFetch, inputChange, setPageInformation, setQueryString, setStatus } from "./MoviesSlice"
import { moviesKey, peopleKey } from "./keys"



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
                yield put(setStatus("succes"))
            } catch (error) {
                yield put(setStatus("failed"))
            };
        }
        if (type === peopleKey) {
            try {
                const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/search/person?", page, query)
                yield put(setPageInformation(data))
                yield put(setStatus("succes"))
            } catch (error) {
                yield put(setStatus("failed"))
            };
        }
    } else {
        if (type === moviesKey) {
            try {
                const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/movie/popular?", page)
                yield put(setPageInformation(data))
                yield put(setStatus("succes"))
            }
            catch (error) {
                yield put(setStatus("failed"))
            }
        }
        if (type === peopleKey) {
            try {
                const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/person/popular?", page)
                yield put(setPageInformation(data))
                yield put(setStatus("succes"))
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