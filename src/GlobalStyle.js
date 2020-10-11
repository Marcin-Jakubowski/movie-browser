import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: #E5E5E5;
        margin: 0;
        padding: 0;
    }
`;