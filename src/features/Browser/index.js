import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { inputChange, selectQueryString, setStatus } from '../../MoviesSlice';
import useSearchByQuery from './useSearchByQuery';
import { moviesKey, peopleKey } from '../../functionsAndKeys/keys';
import browserLogo from "../../assets/browserLogo.svg";
import { BrowserContainer, BrowserInput, BrowserLogo } from "./styled";

function Browser() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const searchByQuery = useSearchByQuery();
    const location = useLocation();

    const type = location.pathname.includes(moviesKey) ? moviesKey : peopleKey;

    useEffect(() => { setValue("") }, [type]);

    const queryString = useSelector(selectQueryString);
    const onInputChange = ({ target }) => {
        setValue(target.value);
        dispatch(inputChange(target.value));
    };

    useEffect(() => {
        dispatch(setStatus("loading"));
        searchByQuery(queryString);
    }, [queryString, dispatch]);

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