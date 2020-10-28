import styled from "styled-components";

export const NavButton = styled.button`
    color: white;
    background-color: black;
    border: none;
    display: flex;
    align-items: center;
    margin: 0 50px 0 0;

    @media (max-width: 1368px) {
        margin: 0;
    }
`;

export const NavLogo = styled.img`
    display: block;
    padding: 0 5px;
`;

export const NavContent = styled.span`
    display: block;
    padding: 0 8px;
    font-size: 21px;

    &:link {
        text-decoration: none;
    }
`;