import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const BackgroundContainer = styled.ul`
    background-color: black;
    margin: 0;
    padding: 0;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    font-weight: 600;
    color: white;
    padding: 13.5px 20px;
    
    &.${activeClassName} {
        border: 1px solid white;
        border-radius: 24px;
    }
    &:link {
        color: white
    }
`;

export const StyledNavLinkLogo = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: white;
    padding: 13.5px;

    &:link {
        color: white
    }
`;

export const NavListItem = styled.li`
    padding: 0;
`;

export const NavList = styled.ul`
    list-style: none;
    background-color: black;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 16px;
    min-height: 94px;
    font-size: 14px;
    line-height: 21px;

    @media( max-width: 767px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const NavContainer = styled.div`
    width: 1368px;
    display: grid;
    grid-template-columns: repeat(3, auto) 1fr;
    grid-gap: 10px;
    align-items: center;
    margin: 0 auto;

@media( max-width: 767px) {
    grid-template-columns: repeat(3, auto);
}
`;