import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: white;
    padding: 13.5px;
    
    &.${activeClassName} {
        border: 1px solid white;
        border-radius: 24px;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 94px;
    font-size: 14px;
    line-height: 21px;
`;