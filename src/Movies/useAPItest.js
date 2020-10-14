import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { apiKey } from "../apiKey"
import { selectPageInformation, setPageInformation } from "./MoviesSlice"


export const useAPI = (page, apiLink) => {

    const dispatch = useDispatch();
    const data = useSelector(selectPageInformation)

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
    return data.results;
}