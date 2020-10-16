import { useLocation, useHistory } from "react-router-dom"

const useReplaceQueryParameter = () => {
    const location = useLocation()
    const history = useHistory()
    const searchParams = new URLSearchParams(location.search)
    const setQueryValue = ({ key, value }) => {
        if (!value) {
            searchParams.delete(key)
        } else {
            searchParams.set(key, value)
        }
        history.push(`${location.pathname}?${searchParams.toString()}`)
    }
    return setQueryValue
};

export default useReplaceQueryParameter