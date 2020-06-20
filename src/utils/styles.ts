import styled, { css, createGlobalStyle } from 'styled-components';
import colors from '../constants/colors';
import breakpoints from '../constants/breakpoints';

export const defaultFont = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;

export const QuicksandFont = css`
  font-family: 'Quicksand', 'sand-serif';
  font-display: swap;
`;

export const ChivoFont = css`
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
    background: ${colors.yellow};
  }
  body {
    ${ChivoFont}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;

    *, input, label {
      ${QuicksandFont}
    }
    
    h1, h2, h3, h4 {
      ${QuicksandFont}
      margin: 0;
      * {
        font-family: inherit;
      }
    }
  }

  a {
    text-decoration: none;
  }
  #__next {
    min-height: 100%;
    background: ${colors.yellow};
    height: 100%;
  }
`;

export const BaseWidthLayout = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: ${breakpoints.base}px;
  margin: auto;
`;
