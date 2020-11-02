import { useLocation, useHistory } from "react-router-dom";
import { pageKey, searchKey } from "./functionsAndKeys/keys";

const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    const setQueryValue = (type, { key, value }) => {
        const searchParams = new URLSearchParams(location.search);
        if (!value) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }
        if (key === searchKey) {
            searchParams.set(pageKey, 1);
        }
        history.push(`/${type}?${searchParams.toString()}`);
    }
    return setQueryValue;
};

export default useReplaceQueryParameter;