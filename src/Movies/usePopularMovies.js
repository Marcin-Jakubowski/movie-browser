import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { apiKey } from "../apiKey"
import { selectPageInformation, setPageInformation } from "./MoviesSlice"


export const usePopularMovies = (page) => {

    const dispatch = useDispatch();
    const popularMovies = useSelector(selectPageInformation)

    const getPopularMovies = async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/movie/popular?", {
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
    useEffect(() => { getPopularMovies(1) }, []);
    return popularMovies.results;
}