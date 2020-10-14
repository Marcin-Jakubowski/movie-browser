import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { apiKey } from "./apiKey"
import { selectPageInformation, selectQueryString, setPageInformation, setSelectedPage } from "./MoviesSlice"


export const usePopular = (page, apiLink) => {

    const dispatch = useDispatch();
    const data = useSelector(selectPageInformation)
    const queryString = useSelector(selectQueryString)

    const getData = async () => {
        try {
            const response = await axios.get(apiLink, {
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
    useEffect(() => { getData(page) }, [page]);
    useEffect(() => { dispatch(setSelectedPage(1)) }, [queryString])
    return data;
}