import { useLocation, useHistory } from "react-router-dom"

const useReplaceQueryParameter = () => {


    const location = useLocation()
    const history = useHistory()

    const setQueryValue = (type, { key, value }) => {
        const searchParams = new URLSearchParams(location.search)
        if (!value) {
            searchParams.delete(key)
        } else {
            searchParams.set(key, value)

        }
        if (key === "search") {
            searchParams.set("page", 1)
        }
        history.push(`/${type}?${searchParams.toString()}`)
    }
    return setQueryValue
};

export default useReplaceQueryParameter