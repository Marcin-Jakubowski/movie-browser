import styled from "styled-components";

export const BrowserContainer = styled.div`
    position: relative;
`;

export const BrowserLogo = styled.img`
    position: absolute;
    top: 14px;
    left: 25px;

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        left: 15px;
        top: 12px;
    }
`;

export const BrowserInput = styled.input`
    line-height: 24px;
    font-size: 16px;
    padding: 12px;
    padding-left: 64px;
    border-radius: 24px;
    width: 432px;
    max-height: 48px;
    justify-self: end;

    &:focus{
       outline: none;
    }

    @media( max-width:  ${({ theme }) => theme.breakpoint.tabletMax}px) {
        width: 400px;
    }

    @media( max-width:  ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        font-size: 16px;
        line-height: 17px;
        max-height: 44px;
        border-radius: 22px;
        padding-left: 40px;
    }

`;