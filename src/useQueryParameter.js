import { useLocation } from "react-router-dom"

const useQueryParameter = () => {
    const location = useLocation()
    return (new URLSearchParams(location.search)).get("search")
}

export default useQueryParameter
