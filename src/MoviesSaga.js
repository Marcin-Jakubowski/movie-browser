import { put, debounce} from "redux-saga/effects"
import {setQueryParameter, setQueryString } from "./MoviesSlice"



function* setQueryStringHandler(action) {
    const query = yield action.payload
   yield put(setQueryString(query))
}


export function* MoviesSaga() {
    yield debounce(1000, setQueryParameter.type, setQueryStringHandler)
}