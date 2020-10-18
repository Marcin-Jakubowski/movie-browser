import { useLocation } from "react-router-dom"
import useReplaceQueryParameter from "../useReplaceQueryParameter"
import {moviesKey, peopleKey, searchKey, } from "../keys"

const useSearchByQuery = () => {
    const location = useLocation()
    const replaceQueryParameter = useReplaceQueryParameter()
    const searchByQuery = (queryString) => {
        if (queryString !== "initial") {
            let type = ""
            if (location.pathname.includes(moviesKey)) {
                type = moviesKey;

            }
            if (location.pathname.includes(peopleKey)) {
                type = peopleKey;
            }
            const queryValue = queryString.trim() !== "" ? queryString : undefined
            replaceQueryParameter(type, {
                key: searchKey,
                value: queryValue

            })

        }
    }

    return searchByQuery
}

export default useSearchByQuery