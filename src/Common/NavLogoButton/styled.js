import styled from "styled-components";

export const NavButton = styled.button`
    color: ${({ theme }) => theme.color.navigationFont};
    background-color: ${({ theme }) => theme.color.navigationBackground};
    border: none;
    display: flex;
    align-items: center;
    margin: 0 50px 0 0;
    transition: 0.3s;
    
    &:hover {
        background-image: radial-gradient(rgb(40, 40, 40), rgb(0, 0, 0));
    }
    
    &:active {
        background-image: radial-gradient(rgb(55, 55, 55), rgb(0, 0, 0));
    }

    @media( max-width: ${({ theme }) => theme.breakpoint.noContainer}px) {
        margin: 0;
    }
`;

export const NavLogo = styled.img`
    display: block;
    padding: 0 5px;

    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding: 0 2px;
    }
`;

export const NavContent = styled.h1`
    display: block;
    padding: 0 8px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 500;
    margin: 0;

    @media( max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        font-size: 14px;
        line-height: 17px;
    }


    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 13px;
        line-height: 17px;
        padding: 0 3px;
    }

    &:link {
        text-decoration: none;
    }
`;