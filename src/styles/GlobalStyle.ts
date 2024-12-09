import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
export const GlobalStyle = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  a:link{
    color: black;
    text-decoration:none;
  }
  a:visited{
    color: black;
    text-decoration:none;
  }
  a:hover{
    color: black;
    text-decoration:none;
  }

  @font-face {
    font-family: 'DM Serif Text';
    font-style: italic;
    font-weight: 400;
    src: url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');
  }

  body {
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    font-family: 'DM Serif Text', "Roboto, Pretendard Variable", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    -ms-overflow-style: none; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${(props) => props.theme.colors.backGroundColor};
    &::-webkit-scrollbar{
      display: none;
    }
  }

  &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.gray_4};
    width: 0.4rem;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.gray_3};
    border-radius: 10px;
  }

  #root {
  width: 100vw;
  height: 100vh;
  }
`;
