import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: white;
    
    &.${activeClassName} {
        font-weight: bold;
    }
    &:link {
        color: white
    }
`;

export const NavListItem = styled.li`
    padding: 10px 30px;
`;

export const NavList = styled.ul`
    text-decoration: none;
    list-style: none;
    background-color: black;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;