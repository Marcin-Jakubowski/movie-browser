import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 16px;
    background-color: ${({ theme }) => theme.color.tileBackground};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
       padding: 8px
    }
`

export const StyledImage = styled.div`
    background-image: url(${({ src }) => src});
    background-position: center;
    background-size: cover;
    width: 177px;
    height: 232px;
    border-radius: 5px;

    ${({ noImage }) => noImage && css`
        background-color: ${({ theme }) => theme.color.noImageBackground};
        background-size: initial;
        background-repeat: no-repeat;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 120px;
        height: 178px;
    }
`

export const Name = styled.h2`
    margin: 0;
    margin-top: 8px;
    color: ${({ theme }) => theme.color.black};
    font-weight: 500;
    font-size: 22px;
    text-align: center;   

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
    }
`

export const JobOrCharacterName = styled.h3`
font-weight: 400;
font-size: 18px;
text-align: center;
margin: 8px auto;
color: ${({ theme }) => theme.color.jobOrCharacterName};

`