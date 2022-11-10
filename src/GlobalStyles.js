import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --white: hsl(0, 0%, 100%);
        --desatDarkCyan: hsl(180, 29%, 50%);
        --lightCyanBorder: hsla(180, 39%, 56%, 0.4);
        --lightGCyanBg: hsl(180, 52%, 96%);
        --lightGCyanFTs: hsl(180, 31%, 95%);
        --darkGCyan: hsl(180, 8%, 52%);
        --veryDarkGCyan: hsl(180, 14%, 20%);
        --shadow: hsl(190,32%,89%);
    }

    ::-webkit-scrollbar {
        display: none;
    }
      
    * {
        box-sizing: border-box;
        font-family: 'League Spartan', Helvetica, sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        -ms-overflow-style: none;
        scrollbar-width: none;

        p, input {
            margin: 0;
            font-size: 16px;
            font-weight: 700;
        }
    }
`;
