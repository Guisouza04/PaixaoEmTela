import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
  --fundo: #ffe8ea;
  --textPrimários: #333333;
  --textSecundários: #767676;
  --colorTitles: #ea5f9d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: sans-serif;
  background-color: var(--fundo);
  overflow-x: hidden;
  font-size: 16px;
}

section {
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  scroll-margin-top: 19rem;
}

h1 {
  justify-self: center;
  font-size: 2.5rem;
  font-family: "Pacifico", cursive;
  font-style: normal;
  font-weight: 400;
  color: var(--colorTitles);
}

h2 {
  justify-self: center;
  font-size: 2.2rem;
  font-family: "Pacifico", cursive;
  font-style: normal;
  font-weight: 400;
  color: var(--colorTitles);
}

a {
  text-decoration: none;
  color: var(--textSecundários);
}
    `;

export default GlobalStyles;
