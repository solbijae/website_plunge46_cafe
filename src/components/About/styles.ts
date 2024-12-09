import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-bottom: 10rem;
  text-align: center;
  width: 1040px;

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 768px;
  `}
  ${({ theme }) => theme.mediaQueries.mobile`
    width: 480px;
  `}
`;

export const Title = styled.h3`
  padding: 5rem 0 2rem 0;
  text-align: center;
  ${({ theme }) => theme.typo.desktop_title_h3};
`;
