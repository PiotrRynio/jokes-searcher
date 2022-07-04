import { createGlobalStyle } from 'styled-components';
import { GlobalStylesProps } from '../types/GlobalStyles';

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
  } 
  
  body { 
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
  } 
   
  ::-webkit-scrollbar {
    width: 16px;
  } 
  
  ::-webkit-scrollbar-track-piece  {
    background:  ${({ theme }) => theme.colors.scrollbarTrackPiece}

  }
  
  ::-webkit-scrollbar-thumb { 
    border: 4px solid transparent;
    border-radius: 9px; 
    background: ${({ theme }) => theme.colors.scrollbarThumb};
    background-clip: content-box;
  }
`;
