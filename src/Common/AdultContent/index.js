import React from "react"
import { useDispatch } from "react-redux"
import { setStatus } from "../../MoviesSlice"
import icon from "./AdultIcon.svg"
import { Container, StyledImage, MainHeader, SmallHeader, StyledLink } from "./styled"

const AdultContent = () => {

    const dispatch = useDispatch()
    return (
        <Container>
            <StyledImage
                src={icon}
                alt={"something gone wrong"}
            />
            <MainHeader>x
            You tried to enter page, which contains adult content
        </MainHeader>
            <SmallHeader>
                Our website is family friendly, so we do not include that kind of content
        </SmallHeader>
            <StyledLink
                to={"/movies"}
                onClick={() => dispatch(setStatus("loading"))}
            >
                Back to home page
        </StyledLink>
        </Container>
    )
}

export default AdultContent