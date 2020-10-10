import React from 'react';
import { NavButton, NavContent, NavLogo } from "./styled"
import navLogo from "./navLogo.svg"

function NavLogoButton() {

    return (
        <NavButton>
            <NavLogo src={navLogo} alt="Navigation Logo" />
            <NavContent>Movies Browser</NavContent>
        </NavButton>
    );
};

export default NavLogoButton;