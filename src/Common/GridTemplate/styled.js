import styled, { css } from "styled-components";
import { moviesKey, peopleKey } from "../../keys";
import { Link } from "react-router-dom";


export const Wrapper = styled.section`
    width: 100%;
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
        grid-template-columns: repeat(auto-fill, 208px);
        grid-auto-rows: minmax(339px, min-content);
        @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            grid-template-columns: repeat(auto-fill, 136px);
            grid-auto-rows: minmax(245px, min-content);
            grid-gap: 16px;}
    `}

`

export const GridTemplateLink = styled(Link)`
    text-decoration: none;
`;

