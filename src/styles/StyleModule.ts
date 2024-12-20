import { styled, css } from 'styled-components';

export const BodyWrap = styled.div`
  ${(props) => props.theme.mediaQueries.mobile`
    max-width: 480px;
    overflow: hidden;
  `}
`;

export const ViewHeight = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  min-height: calc(100vh - 100px);

  ${({ theme }) => theme.mediaQueries.mobile`
      min-height: 150px;
  `}
`;

export const Section = styled.section<{ id: string }>`
  padding-top: 100px;
  ${(props) =>
    props.id === 'menu' &&
    `
      background-color: #fff;
    `}
  
  &:nth-child(3) {
    padding: 50px 0;
    background-color: ${(props) => props.theme.colors.backGroundColor2};
  }

  &:nth-child(4) {
    padding-top: 50px;
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
