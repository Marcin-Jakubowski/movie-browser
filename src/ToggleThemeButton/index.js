import React from "react";
import { useDispatch } from "react-redux";
import { toggleThemeStatus } from "../MoviesSlice";
import { Button, ButtonBox, ButtonContainer } from "./styled";

const ToggleThemeButton = () => {
    const dispatch = useDispatch();

    return (
        <ButtonContainer>
            <ButtonBox>
                <Button
                    onClick={() => dispatch(toggleThemeStatus())}
                >

                </Button>
            </ButtonBox>
        </ButtonContainer>
    )
};

export default ToggleThemeButton;