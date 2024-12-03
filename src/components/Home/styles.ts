import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 1040px;

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 768px;
  `}
  ${({ theme }) => theme.mediaQueries.mobile`
    width: 480px;
  `}
`;

export const Title = styled.h2`
  padding: 10rem 0;
  text-align: center;
  ${({ theme }) => theme.typo.title1_24_B};
  color: ${({ theme }) => theme.colors.primaryColor};

  ${({ theme }) => theme.mediaQueries.tablet`
    display: none;
  `}
  ${({ theme }) => theme.mediaQueries.mobile`
    display: none;
  `}
`

export const Image = styled.img`
  width: 100%;
  padding: 3rem 0;

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 700px;
  `}
  ${({ theme }) => theme.mediaQueries.mobile`
    width: 400px;
  `}
`