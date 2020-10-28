import styled, { css } from "styled-components";
import { moviesKey, peopleKey } from "../../keys";
import { Link } from "react-router-dom";


export const Wrapper = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    display: grid;
    grid-gap: 24px;
    justify-content: center;
    list-style: none;
  

    ${({ type }) => type === moviesKey && css`
        grid-template-columns: repeat(auto-fill, 324px);

        @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            grid-template-columns: 1fr;
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


