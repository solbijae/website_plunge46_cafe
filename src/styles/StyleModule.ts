import { styled, css } from 'styled-components';

export const ViewHeight = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  min-height: 100vh;
`;

export const Section = styled.section<{ id: string }>`
  padding: 5rem 0;
  ${(props) => 
    props.id === "menu" &&`
      background-color: #fdfdf7;
    `
  }
`;

export const selectNone = css`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const clearFix = css`
  content: '';
  clear: both;
  display: table;
`;
