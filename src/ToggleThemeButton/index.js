import React from "react";
import { useDispatch } from "react-redux";
import toggleThemeStatus from "../MoviesSlice";

const ToggleThemeButton = () => {

    const dispatch = useDispatch();
    
    
    return (
        <ButtonBox>
            <Button
            onClick={() => dispatch(toggleThemeStatus())}
            >
                
            </Button>
        </ButtonBox>
    )
}

export default ToggleThemeButton