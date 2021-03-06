import styled from "styled-components";

export const StyledHeader = styled.h2`
    font-size: 36px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.mainFont};

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;