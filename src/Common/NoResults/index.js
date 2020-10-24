import React from "react"
import noResultsImage from "./noResultsImage.svg"
import { ImageContainer, StyledImage } from "./styled"

const NoResults = () => (
    <ImageContainer>
        <StyledImage
            src={noResultsImage}
            alt="no results"
        />
    </ImageContainer>
)

export default NoResults