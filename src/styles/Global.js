import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font: 14px  Roboto, sans-serif;
    }

    input {
      border: 1px solid hsl(0, 0%, 80%);
    }

    a {
      text-decoration: none;
      margin: 0;
      padding: 0;
    }

    svg {
      cursor: pointer;
    }

    button {
        cursor: pointer;
    }
`;
