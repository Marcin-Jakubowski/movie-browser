import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const BackgroundContainer = styled.ul`
    background-color: ${({ theme }) => theme.color.navigationBackground};
    margin: 0;
    padding: 0;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.color.navigationFont};
    padding: 13px 20px;
    border-radius: 24px;
    transition: 0.3s;
        
    &:hover {
        background-image: radial-gradient(rgb(40, 40, 40), rgb(0, 0, 0));
    }
    
    &:active {
        background-image: radial-gradient(rgb(55, 55, 55), rgb(0, 0, 0));
    }

    @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding: 8px 12px;
    }
    
    &.${activeClassName} {
        border: 1px solid ${({ theme }) => theme.color.navigationFont};

        @media( max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
            border-radius: 18px;
        }
    }
    &:link {
        color: ${({ theme }) => theme.color.navigationFont}
    }
`;

export const StyledNavLinkLogo = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${({ theme }) => theme.color.navigationFont};
    padding: 13px;

    &:link {
        color: ${({ theme }) => theme.color.navigationFont}
    }
`;

export const NavListItem = styled.li`
    padding: 0;
`;

export const NavList = styled.ul`
    list-style: none;
    background-color: ${({ theme }) => theme.color.navigationBackground};
    display: flex;
    align-items: center;
    margin: 0;
    padding: 16px;
    min-height: 94px;
    font-size: 14px;
    line-height: 21px;

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 0 16px;
        font-size: 12px;
        line-height: 18px;
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