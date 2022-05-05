import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins';
  overflow-x: hidden;
}

body {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.mainText};
}
`;
