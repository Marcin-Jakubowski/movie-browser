import React from "react";
import { useDispatch } from "react-redux";
import { toggleThemeStatus } from "../../MoviesSlice";
import { Button, ButtonItem, ButtonContainer, Content } from "./styled";

const ToggleThemeButton = () => {
    const dispatch = useDispatch();

    return (
        <ButtonContainer>
            <Content>Change theme:</Content>
            <Button
                onClick={() => dispatch(toggleThemeStatus())}
            >
                <ButtonItem />
            </Button>
        </ButtonContainer>
    )
};

export default ToggleThemeButton;