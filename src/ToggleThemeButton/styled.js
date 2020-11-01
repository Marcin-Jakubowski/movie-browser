import styled from "styled-components";

export const ButtonContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: black;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.color.posterFont};
    padding: 12px;
`

export const Button = styled.button`
    height: 40px;
    width: 80px;
    border-radius: 20px;
    border: 1px solid white;
    background-color: #555;
    padding: 0 2px;
    display: flex;
    align-items: center;
    outline: none;
`

export const ButtonItem = styled.div`
    height: 36px;
    width: 36px;
    border: 1px solid black;
    border-radius: 18px;
    background-color: #111;
    transform: ${({ theme }) => theme.transform.toggleTheme};
`