import styled from "styled-components"

export const ImageContainer = styled.div`
    margin: 40px auto;
    width: 668px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        width: 80vw
    }
`

export const StyledImage = styled.img`
    width: 100%;
`