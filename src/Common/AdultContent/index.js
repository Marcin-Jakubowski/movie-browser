import React from "react"
import { useDispatch } from "react-redux"
import { setAdult, setStatus } from "../../MoviesSlice"
import icon from "./AdultIcon.svg"
import { Container, StyledImage, MainHeader, SmallHeader, StyledLink, Button, ButtonContainer } from "./styled"

const AdultContent = () => {

    const dispatch = useDispatch()
    return (
        <Container>
            <StyledImage
                src={icon}
                alt={"something gone wrong"}
            />
            <MainHeader>
                You tried to enter page, which contains adult content
            </MainHeader>
            <SmallHeader>
                If you are not 18 years old, please back to home page and start searching for another information. If you are at least 18 years old and want to see the conent, click on i'm adult
            </SmallHeader>
            <ButtonContainer>
                <StyledLink
                    to={"/movies"}
                    onClick={() => dispatch(setStatus("loading"))}
                >
                    Back to home page
            </StyledLink>
                <Button
                    onClick={() => dispatch(setAdult())}
                >
                    I'm adult
            </Button>
            </ButtonContainer>
        </Container>
    )
}

export default AdultContent