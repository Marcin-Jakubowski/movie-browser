import { useLocation, useHistory } from "react-router-dom"

const useReplaceQueryParameter = () => {


    const location = useLocation()
    const history = useHistory()

    const setQueryValue = ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search)
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