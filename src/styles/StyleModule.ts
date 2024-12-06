import { styled, css } from 'styled-components';

export const ViewHeight = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  width: auto;
  min-height: 100vh;
`

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
