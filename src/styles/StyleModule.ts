import { css } from 'styled-components';

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
