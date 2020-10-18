import { useLocation } from "react-router-dom"
import useReplaceQueryParameter from "../useReplaceQueryParameter"
import {moviesKey, pepoleKey, searchKey} from "../apiKey"

const useSearchByQuery = () => {
    const location = useLocation()
    const replaceQueryParameter = useReplaceQueryParameter()
    const searchByQuery = (queryString) => {
        if (queryString !== "initial") {
            let type = ""
            if (location.pathname.includes(moviesKey)) {
                type = moviesKey;

            }
            if (location.pathname.includes(pepoleKey)) {
                type = pepoleKey;
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