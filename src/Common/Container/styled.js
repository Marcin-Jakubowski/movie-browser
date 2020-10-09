import styled from "styled-components"

export const Main = styled.main`
    max-width: 1324px;
    margin: 56px auto;

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
          max-width: unset;
          width: calc(100% - 16px);
          margin: 24px 16px;
        }
`