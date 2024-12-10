import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100vw * 0.8);
  max-width: 1040px;
  margin: 0 auto;
  height: 100px;
  user-select: none;

  ${({ theme }) => theme.mediaQueries.tablet`
    display: flex;
    justify-content: center;
    width: calc(100vw * 0.8);
    height: 60px;
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    width: calc(100vw * 0.8);
    height: 60px;
  `}

  p {
    display: flex;
    height: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${({ theme }) => theme.typo.desktop_body_12_M}
    color: ${({ theme }) => theme.colors.gray_2};

    ${({ theme }) => theme.mediaQueries.tablet`
      max-width: calc(100vw * 0.8);
      height: 100%;
      ${theme.typo.tablet_body_12_M};
    `}

    ${({ theme }) => theme.mediaQueries.mobile`
      max-width: calc(100vw * 0.8);
      height: 100%;
      ${theme.typo.mobile_body_12_M};
    `}
  }
`;
