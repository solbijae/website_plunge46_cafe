import styled from 'styled-components';

export const Container = styled.div`
  width: 1040px;
  margin: 0 auto;
  height: 100px;
  user-select: none;

  p {
    display: flex;
    height: 100px;
    position: relative;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.typo.caption1_12_B}
    color: ${({ theme }) => theme.colors.gray_2};
  }

  ${({ theme }) => theme.mediaQueries.mobile`
    max-width: 480px;
    height: 60px;
  `}
`;
