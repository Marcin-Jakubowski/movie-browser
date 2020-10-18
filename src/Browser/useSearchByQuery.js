import { useLocation } from "react-router-dom"
import useReplaceQueryParameter from "../useReplaceQueryParameter"

const useSearchByQuery = () => {
    const location = useLocation()
    const replaceQueryParameter = useReplaceQueryParameter()
    const searchByQuery = (target) => {
        let type = ""
        if (location.pathname.includes("movies")) {
            type = "movies";

        }
        if (location.pathname.includes("people")) {
            type = "people";
        }
        const queryValue = target.value.trim() !== "" ? target.value : undefined
        replaceQueryParameter(type, {
            key: "search",
            value: queryValue

        })

    }

    return searchByQuery
}

export default useSearchByQuery