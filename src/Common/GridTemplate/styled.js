import styled from "styled-components" 

export const Wrapper = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, minmax(324px, 1fr));
    grid-gap: 24px;
`