import { styled, css } from 'styled-components';

export const ViewHeight = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  min-height: calc(100vh - 100px);
`;

export const Section = styled.section<{ id: string }>`
  padding-top: 100px;
  ${(props) =>
    props.id === 'menu' &&
    `
      background-color: #fff;
    `}
  
  &:nth-child(3) {
    padding-bottom: 100px;
    background-color: #D8DACF;
  }

  &:nth-child(4) {
    min-height: calc(100vh - 200px);
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
