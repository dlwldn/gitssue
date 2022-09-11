import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  body {
    background: ${colors.gray1};
    color: ${colors.white};
  }

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  button {
    cursor: pointer;

    :disabled {
      cursor: not-allowed;
      color: ${colors.gray4};
    }
  }

`;

export default GlobalStyle;
