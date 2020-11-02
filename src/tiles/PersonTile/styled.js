import styled, { css } from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 16px;
    background-color: ${({ theme }) => theme.color.tileBackground};
    box-shadow: 0px 4px 12px ${({ theme }) => theme.color.boxShadow};
    border-radius: 5px;
    transition: 0.3s;
            
    &:hover {
       filter: brightness(93%);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
       padding: 8px;
    }
`;

export const StyledImage = styled.div`
    background-image: url(${({ src }) => src});
    background-position: center;
    background-size: cover;
    width: 177px;
    height: 232px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ noImage }) => noImage && css`
        background-image: none;
        background-color: ${({ theme }) => theme.color.noImageBackground};
        background-size: initial;
        background-repeat: no-repeat;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 120px;
        height: 178px;
    }
`;

export const Icon = styled.img`
    display: none;

    ${({ noImage }) => noImage && css`
        display: unset;
    `}
`

export const Name = styled.h3`
    margin: 0;
    margin-top: 8px;
    color: ${({ theme }) => theme.color.black};
    font-weight: 500;
    font-size: 22px;
    text-align: center;   
    overflow-wrap: anywhere;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
    }
`;

export const JobOrCharacterName = styled.h4`
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    margin: 8px auto;
    color: ${({ theme }) => theme.color.jobOrCharacterName};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
    }
`;