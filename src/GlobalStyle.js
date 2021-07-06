import { createGlobalStyle } from "styled-components";
import background from "./images/backgroundImage.png";
export const GlobalStyle = createGlobalStyle`
    html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(221, 240, 240);
  padding: 20px;
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
  background-size: cover;
  background-image: url("${background}");
}

`;