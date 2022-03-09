import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

:root {
   --white: #FFFFFF;

   --gray-100:#e1e1e6;
   --gray-300: #a8a8b3;
   --gray-800: #29292e;
   --gray-850: #1f2729;
   --gray-900: #121214;
}

@media (max-width: 1080px) {
   html {
      font-size: 93.75%;
   }
}

@media (max-width: 720px) {
   html {
      font-size: 87.5%;
   }
}

html {
   scroll-behavior: smooth;
}

body {
   background: var(--gray-900);
   color: var(--white);
}

body, input, textarea, select, button {
   font: 400 1rem "roboto", sans-serif;
}

button {
   cursor: pointer;
}

a {
   color: inherit;
   text-decoration: none;
}

`;
