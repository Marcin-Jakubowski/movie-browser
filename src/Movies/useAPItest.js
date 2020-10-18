import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiKey } from "../apiKey";
import {
    selectMovieDetails,
    selectMovieCredits,
    selectPersonDetails,
    selectPersonCredits,
    setMovieDetails,
    setMovieCredits,
    setPersonDetails,
    setPersonCredits

} from "../MoviesSlice";


export const useAPI = (type, apiLink) => {
    const dispatch = useDispatch();

    const movieDetailsData = useSelector(selectMovieDetails);
    const movieCreditsData = useSelector(selectMovieCredits);
    const personDetailsData = useSelector(selectPersonDetails);
    const personCreditsData = useSelector(selectPersonCredits);
    let data = "";

    switch (type) {
        case "movieDetails":
            data = movieDetailsData;
            break;
        case "movieCredits":
            data = movieCreditsData;
            break;
        case "personDetails":
            data = personDetailsData;
            break;
        case "personCredits":
            data = personCreditsData;
            break;
        default:
            break;
    }

    const getData = async () => {
        try {
            const response = await axios.get(apiLink, {
                params: {
                    api_key: apiKey
                }
            })
            switch (type) {
                case "movieDetails":
                    dispatch(setMovieDetails(response.data));
                    break;
                case "movieCredits":
                    dispatch(setMovieCredits(response.data));
                    break;
                case "personDetails":
                    dispatch(setPersonDetails(response.data));
                    break;
                case "personCredits":
                    dispatch(setPersonCredits(response.data));
                    break;
                default:
                    break;
            }
                   
            } catch (error) {
                console.log(error)
            }
        };
        useEffect(() => { getData() }, [apiLink]);
        return data;
    }