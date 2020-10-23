import styled, { css } from "styled-components";
import { moviesKey, peopleKey } from "../../keys";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    width: 100%;
    min-height: 1391px;
    display: grid;
    grid-gap: 24px;

    ${({ type }) => type === moviesKey && css`
        grid-template-columns: repeat(4, 1fr);

        @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            grid-template-columns: 1fr;
            grid-auto-rows: 201px;
            grid-gap: 16px 0;
        }
`}

    ${({ type }) => type === peopleKey && css`
        grid-template-columns: repeat(6, 1fr);
        grid-auto-rows: 339px;
        @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 245px;
            grid-gap: 16px;}
    `}

`

export const GridTemplateLink = styled(Link)`
    text-decoration: none;
`;