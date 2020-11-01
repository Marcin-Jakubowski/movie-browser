import React from "react";
import { useDispatch } from "react-redux";
import { setStatus } from "../../MoviesSlice";
import icon from "./failedIcon.svg";
import { Container, StyledImage, MainHeader, SmallHeader, StyledLink } from "./styled";

const Failed = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <StyledImage
                src={icon}
                alt={"something gone wrong"}
            />
            <MainHeader>
                Oops! Something went wrong...
        </MainHeader>
            <SmallHeader>
                Please check your network connection and try again
        </SmallHeader>
            <StyledLink
                to={"/movies"}
                onClick={() => dispatch(setStatus("loading"))}
            >
                Back to home page
        </StyledLink>
        </Container>
    )
};

export default Failed;