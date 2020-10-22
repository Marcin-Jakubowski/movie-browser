import styled, { css } from "styled-components"
import { moviesKey, peopleKey } from "../../keys"

export const Wrapper = styled.section`
    width: 100%;
    min-height: 1391px;
    display: grid;
    grid-gap: 24px;

    ${({ type }) => type === moviesKey && css`
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 650px;

        @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            grid-template-columns: 1fr;
            grid-auto-rows: 201px;
            grid-gap: 16px 0;
        }
`}

    ${({ type }) => type === peopleKey && css`
        grid-template-columns: repeat(auto-fill, 208px);
        grid-auto-rows: 339px;
        @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            grid-template-columns: repeat(auto-fill, 208px);
            grid-auto-rows: 245px;
            grid-gap: 16px;}
    `}

`