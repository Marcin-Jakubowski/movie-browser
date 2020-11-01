import React from 'react';
import navLogo from "./navLogo.svg";
import { NavButton, NavContent, NavLogo } from "./styled";

function NavLogoButton() {
    return (
        <NavButton>
            <NavLogo src={navLogo} alt="Navigation Logo" />
            <NavContent>Movies Browser</NavContent>
        </NavButton>
    );
};

export default NavLogoButton;