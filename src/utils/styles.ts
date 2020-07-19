import {
  css,
  createGlobalStyle,
  FlattenSimpleInterpolation
} from 'styled-components';
import colors from '../constants/colors';

export const defaultFont: FlattenSimpleInterpolation = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;

export const QuicksandFont: FlattenSimpleInterpolation = css`
  font-family: 'Quicksand', 'sand-serif';
  font-display: swap;
`;

export const ChivoFont: FlattenSimpleInterpolation = css`
  font-family: 'Chivo', 'sand-serif';
  font-display: swap;
`;

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Chivo';
    font-display: swap;
    src: url('/static/fonts/Chivo-Light.ttf');
    font-weight: lighter;
    font-style: normal;
  }

  @font-face {
    font-family: 'Chivo';
    font-display: swap;
    src: url('/static/fonts/Chivo-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Chivo';
    font-display: swap;
    src: url('/static/fonts/Chivo-Bold.ttf');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Quicksand';
    font-display: swap;
    src: url('/static/fonts/Quicksand-Light.ttf');
    font-weight: lighter;
    font-style: normal;
  }

  @font-face {
    font-family: 'Quicksand';
    font-display: swap;
    src: url('/static/fonts/Quicksand-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Quicksand';
    font-display: swap;
    src: url('/static/fonts/Quicksand-Bold.ttf');
    font-weight: bold;
    font-style: normal;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: auto;
    height: 100%;
    min-height: 100%;
  }
  body {
    ${ChivoFont}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    height: 100%;

    *, input, label {
      ${QuicksandFont}
    }
    
    h1, h2, h3, h4, p {
      ${QuicksandFont}
      margin: 0;
      * {
        font-family: inherit;
      }
    }
  }

  a {
    text-decoration: none;
    color: ${colors.dark.base};
  }
  #__next {
    min-height: 100%;
    height: 100%;
  }
`;
