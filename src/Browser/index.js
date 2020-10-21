import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputChange, selectQueryString } from '../MoviesSlice';
import { BrowserInput } from "./styled"
import useSearchByQuery from './useSearchByQuery';

function Browser() {

    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const searchByQuery = useSearchByQuery()

    const queryString = useSelector(selectQueryString)

    const onInputChange = ({ target }) => {
        setValue(target.value)
        dispatch(inputChange(target.value))
    }

    useEffect(() => { searchByQuery(queryString) }, [queryString])

    return (
        <BrowserInput
            value={value}
            placeholder="Search for movies..."
            onChange={onInputChange}
        />
    );
};

export default Browser;