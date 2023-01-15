import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }


    body{
        color: ${(props) => props.theme['base-text']};
        background: ${(props) => props.theme.background};
        -webkit-font-smoothing: antialiased;
    }


    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        html {
            font-size: 87.5%;
        }
    }

    @media (max-width: 468px) {
        html {
            font-size: 75%;
        }
    }

`
