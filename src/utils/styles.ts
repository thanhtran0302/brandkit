import { css, createGlobalStyle } from 'styled-components';

export const defaultFont = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;

export const QuicksandFont = css`
  font-family: 'Quicksand', 'sand-serif;
  font-display: swap;
`;

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Bariol';
    font-display: swap;
    src: url('/static/fonts/Quicksand-Regular.eot');
    src: url('/static/fonts/Quicksand-Regular.eot?#iefix')
        format('embedded-opentype'),
      url('/static/fonts/Quicksand-Regular.woff') format('woff'),
      url('/static/fonts/Quicksand-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Bariol';
    font-display: swap;
    src: url('/static/fonts/Quicksand-Bold.eot');
    src: url('/static/fonts/Quicksand-Bold.eot?#iefix')
        format('embedded-opentype'),
      url('/static/fonts/Quicksand-Bold.woff') format('woff'),
      url('/static/fonts/Quicksand-Bold.ttf') format('truetype');
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
    ${defaultFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;

    *, input, label {
      ${QuicksandFont}
    }
    
    h1, h2, h3, h4 {
      ${QuicksandFont};
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
    height: 100%;
  }
`;
