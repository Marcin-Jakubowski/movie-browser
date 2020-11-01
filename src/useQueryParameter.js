import { useLocation } from "react-router-dom";

const useQueryParameter = (param) => {
    const location = useLocation();
    return (new URLSearchParams(location.search).get(param));
}

export default useQueryParameter;