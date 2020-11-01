import React from "react";
import { StyledHeader } from "./styled";

const Header = ({ text }) => (
    <StyledHeader>
        {text}
    </StyledHeader>
);

export default Header;