import Axios from "axios";
import { apiKey } from "./keys";

export const fetchFromApi = async (link, page, query) => {
    const queryIfExist = query ? { query: query } : "";

    try {
        const response = await Axios.get(link, {
            params: {
                api_key: apiKey,
                page: page,
                ...queryIfExist

            }
        });
        return await response.data;
    } catch (error) {
        console.log(error);
    }
};