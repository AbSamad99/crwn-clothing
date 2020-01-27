import {createGlobalStyle} from 'styled-components';

export const GlobalStyle=createGlobalStyle`
body{
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;
    @media screen and (max-width:800px){
        padding:10px;
    }
}

a{
    text-decoration: none;
    color: black;
}

*{
    box-sizing: border-box;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 0 1px rgba(255,255,255,.5);
}
`;