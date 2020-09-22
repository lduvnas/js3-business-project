import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;

}
body {
  background: whitesmoke;
  color: #555;

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

input{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  background-color: #f1f1f1;
  color: black;
}

.App{
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}

.container{
width: 800px;
  background-color: white;
  padding: 3rem;
  box-shadow: 0 1px 15px rgba(113, 113, 113, 0.06),
    0 5px 12px rgba(211, 211, 211, 0.08);
  border-radius: 5px;
 
}
`;
