import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Acme";
    src: url("/Acme.ttf")format("truetype");
  }
  @font-face {
    font-family: "Cairo";
    src: url("/Cairo.ttf")format("truetype");
  }
  @font-face {
    font-family: "KleeRegular";
    src: url("/KleeRegular.ttf")format("truetype");
  }
  @font-face {
    font-family: "KleeBold";
    src: url("/KleeBold.ttf")format("truetype");
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

    background-image: url('/main_background.svg') !important;
    background-position: left top;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

`;

export default GlobalStyle;
