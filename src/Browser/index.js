import React from 'react';
import useQueryParameter from '../useQueryParameter';
import { BrowserInput } from "./styled"
import useSearchByQuery from './useSearchByQuery';

function Browser() {

    const query = useQueryParameter("search")
    const searchByQuery = useSearchByQuery()

    const onInputChange = ({ target }) => {
        searchByQuery(target)
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