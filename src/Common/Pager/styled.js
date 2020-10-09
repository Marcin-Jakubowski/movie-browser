import styled from "styled-components"

export const Wrapper = styled.nav`
    display: flex;
    width: 525px;
    height: 36px;
    margin: 40px auto;
    justify-content: space-between;

    @media( max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 232px;
            margin: 32px auto;
        }
`

export const ButtonContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
`

export const TextContainer = styled.div`
    font-weight: 400;
    font-size: 16px;
    padding: 8px 18px;
    color: ${({ theme }) => theme.color.pageText};
`
export const Counter = styled.strong`
    color: ${({ theme }) => theme.color.black};
`

export const Button = styled.button`
    font-weight: 400;
    font-size: 14px;
    padding: 8px 18px;
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

`
