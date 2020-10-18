import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { apiKey } from "./apiKey"
import { selectPageInformation, selectQueryString, setPageInformation, setSelectedPage } from "./MoviesSlice"
import useQueryParameter from "./useQueryParameter";


export const useFetch = (page, searchLink, popularLink) => {

    const dispatch = useDispatch();
    const data = useSelector(selectPageInformation)
    const query = useQueryParameter("search")
    const queryString = useSelector(selectQueryString)

    const getSearchResults = async () => {
        if (queryString !== "") {
            try {
                const response = await axios.get(searchLink, {
                    params: {
                        api_key: apiKey,
                        page: page,
                        query: queryString
                    }
                })
                await dispatch(setPageInformation(response.data));
            } catch (error) {
                console.log(error)
            }
        }
    };

    const getPopular = async () => {
        try {
            const response = await axios.get(popularLink, {
                params: {
                    api_key: apiKey,
                    page: page
                }
            })
            dispatch(setPageInformation(response.data));
        } catch (error) {
            console.log(error)
        }
    };

    const getData = async () => {
        if (query) {
            await getSearchResults()
        } else {
            await getPopular()
        }
    }

    useEffect(() => { getData() }, [queryString, page]);
    useEffect(() => { dispatch(setSelectedPage(1)) }, [queryString])
    return data;
}