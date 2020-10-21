import styled from "styled-components"

export const ImageContainer = styled.div`
    margin: 120px auto;
    width: 91px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin: 24px auto;
        width: 35px;
    }
`

export const StyledImage = styled.img`
    width: 100%;
    animation-name: spiner;
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spiner {
        from {
            
        }
        50% {
            transform: rotateZ(180deg);
        }
        to {
            transform: rotateZ(360deg);
        }
    }
`