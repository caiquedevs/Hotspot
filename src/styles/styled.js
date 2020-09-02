import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import * as colors from './colors';

const GlobalStyle = createGlobalStyle`
   /* largura do scroll vertical e horizonal*/
   ::-webkit-scrollbar { width: 2px; height: 4px; }
   /* Fundo do scroll*/
   ::-webkit-scrollbar-track { background: transparent; }
   /* Cor do scroll*/
   ::-webkit-scrollbar-thumb { background: silver; }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  .ItemHotSpot {
    border: 1px dashed transparent;

    @media screen and (min-width: 1080px) {
      cursor: cell;

      :hover {
        border: 1px dashed ${colors.borderRed};
        background-color: ${colors.bkRed};
      }
    }
  }

  body { background-color: ${colors.white} }
  button { cursor: pointer }
`;

export default GlobalStyle;
