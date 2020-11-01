import styled from "styled-components";

export const Main = styled.main`
    max-width: 1368px;
    margin: 0 auto;

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: unset;
        width: calc(100% - 32px);
        margin: 0 16px;
    }
`;