import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { moviesKey, peopleKey } from '../keys';
import { inputChange, selectQueryString } from '../MoviesSlice';
import { BrowserContainer, BrowserInput, BrowserLogo } from "./styled"
import useSearchByQuery from './useSearchByQuery';
import browserLogo from "./browserLogo.svg"

function Browser() {

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const searchByQuery = useSearchByQuery();
    const location = useLocation();

    const type = location.pathname.includes(moviesKey) ? moviesKey : peopleKey

    const queryString = useSelector(selectQueryString);

    const onInputChange = ({ target }) => {
        setValue(target.value)
        dispatch(inputChange(target.value))
    };

    useEffect(() => {
        searchByQuery(queryString);
        setValue("")
    }, [queryString])

    return (
        <BrowserContainer>
            <BrowserLogo src={browserLogo} alt="Browser Logo" />
            <BrowserInput
                value={value}
                placeholder={`Search for ${type}...`}
                onChange={onInputChange}
            />
        </BrowserContainer>
    );
};

export default Browser;