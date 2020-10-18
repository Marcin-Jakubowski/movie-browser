import { useLocation } from "react-router-dom"
import useReplaceQueryParameter from "../useReplaceQueryParameter"

const useSearchByQuery = () => {
    const location = useLocation()
    const replaceQueryParameter = useReplaceQueryParameter()
    const searchByQuery = (queryString) => {
        if (queryString !== "initial") {
            let type = ""
            if (location.pathname.includes("movies")) {
                type = "movies";

            }
            if (location.pathname.includes("people")) {
                type = "people";
            }
            const queryValue = queryString.trim() !== "" ? queryString : undefined
            replaceQueryParameter(type, {
                key: "search",
                value: queryValue

            })

        }
    }

    return searchByQuery
}

export default useSearchByQuery