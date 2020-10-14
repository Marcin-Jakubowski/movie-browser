import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { apiKey } from "./apiKey"
import { selectQueryString, selectSearchResults, setSearchResults, setSelectedPage, } from "./MoviesSlice"


export const useSearch = (page, apiLink) => {

    const dispatch = useDispatch();
    const queryString = useSelector(selectQueryString)
    const data = useSelector(selectSearchResults)

    const getData = async (page) => {
        if (queryString !== "") {
            try {
                const response = await axios.get(apiLink, {
                    params: {
                        api_key: apiKey,
                        page: page,
                        query: queryString
                    }
                })
                await dispatch(setSearchResults(response.data));
            } catch (error) {
                console.log(error)
            }
        }
    };
    useEffect(() => { getData(page) }, [page, queryString]);
    useEffect(() => { dispatch(setSelectedPage(1)) }, [queryString])
    return data;
}