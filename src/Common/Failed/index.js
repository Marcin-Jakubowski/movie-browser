import React from "react"
import icon from "./failedIcon.svg"
import { Container, StyledImage, MainHeader, SmallHeader, StyledLink } from "./styled"

const Failed = () => (
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
        >
            Back to home page
        </StyledLink>
    </Container>
)

export default Failed