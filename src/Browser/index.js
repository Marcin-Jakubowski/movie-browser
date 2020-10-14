import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { selectQueryString, setQueryString } from '../MoviesSlice';
import useQueryParameter from '../useQueryParameter';
import useReplaceQueryParameter from '../useReplaceQueryParameter';
import { BrowserInput } from "./styled"

function Browser() {
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const query = useQueryParameter()
    const queryString = useSelector(selectQueryString)

    if(queryString === "" && query) {
        dispatch(setQueryString(query))
    }

    const replaceQueryParameter = useReplaceQueryParameter()

    const onInputChange = ({ target }) => {
        if (location.pathname.includes("movies" && location.pathname !== "/movies" )) {
            history.push("/movies")
        }
        if (location.pathname.includes("people" && location.pathname !== "/people")) {
            history.push("/people")
        }
        const queryValue = target.value.trim() !== "" ? target.value : undefined
        replaceQueryParameter({
            key: "search",
            value: queryValue
        });
        dispatch(setQueryString(queryValue))
    }

    return (
        <BrowserInput
            value={query || ""}
            placeholder="Search for movies..."
            onChange={onInputChange}
        />
    );
};

export default Browser;