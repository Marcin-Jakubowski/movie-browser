import styled from "styled-components";

export const BrowserInput = styled.input`
    line-height: 24px;
    font-size: 16px;
    padding: 12px;
    border-radius: 24px;
    width: 432px;
    max-height: 48px;
    justify-self: end;

    @media( max-width: 767px) {
        width: 100%;
        line-height: 17px;
        font-size: 13px;
        max-height: 44px;
        border-radius: 22px;
    }
`;