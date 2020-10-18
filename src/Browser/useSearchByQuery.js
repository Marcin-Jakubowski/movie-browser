import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import { selectQueryString, selectSelectedPage, setQueryParameter, setQueryString } from "../MoviesSlice"
import useQueryParameter from "../useQueryParameter"
import useReplaceQueryParameter from "../useReplaceQueryParameter"

const useSearchByQuery = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const query = useQueryParameter("search")
    const replaceQueryParameter = useReplaceQueryParameter()

   
    const searchByQuery = (target) => {
        if (location.pathname.includes("movies" && location.pathname !== "/movies")) {
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
    }

    return searchByQuery
}

export default useSearchByQuery