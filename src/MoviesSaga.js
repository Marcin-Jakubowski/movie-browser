import { put, debounce, call, takeLatest, delay } from "redux-saga/effects";
import Axios from "axios";
import {
    fetchGenresList,
    initiateFetch,
    initiateMovieOrPersonFetch,
    inputChange,
    setGenres,
    setMovieCredits,
    setMovieDetails,
    setPageInformation,
    setPersonCredits,
    setPersonDetails,
    setQueryString,
    setStatus
} from "./MoviesSlice";
import { apiKey, movieKey, moviesKey, peopleKey, personKey } from "./functionsAndKeys/keys";
import { fetchFromApi } from "./functionsAndKeys/fetchFromApi";

function* fetchHandler(action) {
    const page = yield action.payload.page;
    const type = yield action.payload.type;
    const query = yield action.payload.query;
    yield delay(300);
    if (query) {
        if (type === moviesKey) {
            try {
                const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/search/movie??", page, query);
                yield put(setPageInformation(data));
                yield put(setStatus("success"));
            } catch (error) {
                yield put(setStatus("failed"));
            };
        }
        if (type === peopleKey) {
            try {
                const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/search/person?", page, query);
                yield put(setPageInformation(data));
                yield put(setStatus("success"));
            } catch (error) {
                yield put(setStatus("failed"));
            };
        }
    } else {
        if (type === moviesKey) {
            try {
                const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/movie/popular?", page);
                yield put(setPageInformation(data));
                yield put(setStatus("success"));
            }
            catch (error) {
                yield put(setStatus("failed"));
            }
        }
        if (type === peopleKey) {
            try {
                const data = yield call(fetchFromApi, "https://api.themoviedb.org/3/person/popular?", page);
                yield put(setPageInformation(data));
                yield put(setStatus("success"));
            }
            catch (error) {
                yield put(setStatus("failed"));
            }
        }
    }
};

function* inputChangeHandler(action) {
    const payload = yield action.payload;
    yield put(setQueryString(payload));
};

export function* MoviesSaga() {
    yield takeLatest(initiateFetch.type, fetchHandler);
    yield debounce(1000, inputChange.type, inputChangeHandler);
};

function* fetchGenresFromAPI() {
    try {
        const response = yield Axios.get("https://api.themoviedb.org/3/genre/movie/list?", {
            params: {
                api_key: apiKey
            }
        });
        yield put(setGenres(response.data));
    } catch (error) {
        console.log(error);
    }
};

export function* setGenresList() {
    yield takeLatest(fetchGenresList.type, fetchGenresFromAPI);
};

function* fetchMovieOrPersonData(action) {
    yield delay(300);
    const id = yield action.payload.id;
    const type = yield action.payload.type;
    try {
        switch (type) {
            case movieKey:
                const movieDetailsData = yield Axios.get(`https://api.themoviedb.org/3/movie/${id}?`, {
                    params: {
                        api_key: apiKey
                    }
                });
                yield put(setMovieDetails(movieDetailsData.data));

                const movieCreditsData = yield Axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?`, {
                    params: {
                        api_key: apiKey
                    }
                });
                yield put(setMovieCredits(movieCreditsData.data));
                yield put(setStatus("success"));
                break;
            case personKey:
                const personDetailsData = yield Axios.get(`https://api.themoviedb.org/3/person/${id}?`, {
                    params: {
                        api_key: apiKey
                    }
                });
                yield put(setPersonDetails(personDetailsData.data));
                const personCreditsData = yield Axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?`, {
                    params: {
                        api_key: apiKey
                    }
                });
                yield put(setPersonCredits(personCreditsData.data));
                yield put(setStatus("success"));
                break;
            default:
                break;
        }

    } catch (error) {
        yield put(setStatus("failed"));
    }
};

export function* fetchMoviesAndPeopleFromAPI() {
    yield takeLatest(initiateMovieOrPersonFetch.type, fetchMovieOrPersonData);
};