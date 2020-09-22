import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
 
}
body {
  background: whitesmoke;
}
h3 {
 margin-top:2em;
}

p {
  font-size:0.7em;
}

a{
  font-size:0.7em;
  text-decoration: none;
  color: #67a4d9;
}

img{
  max-width: 50%;
}
`;
