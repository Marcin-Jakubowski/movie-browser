import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    width: 530px;
    height: 36px;
    margin: 40px auto;
    justify-content: space-between;

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 250px;
            margin: 32px auto;
        }
`;

export const ButtonContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 -6px;
`;

export const TextContainer = styled.div`
    font-weight: 400;
    font-size: 16px;
    padding: 8px 18px;
    color: ${({ theme }) => theme.color.pageText};

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 10px;
            padding: 7.5px 8px
        }
`;

export const Counter = styled.strong`
    display: inline-block;
    margin: 0 8px;
    color: ${({ theme }) => theme.color.black};

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0 2px;
    }
`;

export const Button = styled.button`
    font-weight: 400;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.pagerButton};
    margin: 0 6px;
    border: none;

    &:hover {
        filter: brightness(105%);
    };

    &:focus {
    filter: brightness(110%);
    outline: none;
    }

    &:active {
    filter: brightness(115%);
    outline: none;
    }

    &:disabled {
        background-color: ${({ theme }) => theme.color.pagerButtonDisabled};
        color: ${({ theme }) => theme.color.black};
        filter: none;
    }

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 7.5px 12px;
        font-size: 5px;
        margin: 0 4px;
    }
`;

export const TextToHide = styled.span`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;

export const Img = styled.img`
    display: inline-block;
    margin-left: 4px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-left: 2px;
    }

    ${({ left }) => left && css`
        transform: rotateY(180deg);
        margin-right: 4px;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            margin-right: 2px;
        }
    `}

    ${({ second }) => second && css`
        display: none;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            display: inline-block;
        }
    ` }
`;