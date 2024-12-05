import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5rem;
  text-align: center;
  align-items: center;
  width: 1040px;

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 768px;
  `}
  ${({ theme }) => theme.mediaQueries.mobile`
    width: 480px;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => theme.typo.title_h3};
  color: ${({ theme }) => theme.colors.primaryColor};
  padding-bottom: 3rem;
`;
