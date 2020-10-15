import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiKey } from "../apiKey";
import { selectMovieDetails, setMovieDetails } from "./MoviesSlice";


export const useAPI = (apiLink) => {

    const dispatch = useDispatch();
    const data = useSelector(selectMovieDetails);

    const getData = async () => {
        try {
            const response = await axios.get(apiLink, {
                params: {
                    api_key: apiKey
                }
            })
            dispatch(setMovieDetails(response.data));
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => { getData() }, [apiLink]);
    return data;
}