import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5rem;
  text-align: center;
  align-items: center;
  width: 1040px;
  height: auto;

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 768px;
  `}
  ${({ theme }) => theme.mediaQueries.mobile`
    width: 480px;
  `}
`;

export const TextContainer = styled.div`
  padding-bottom: 2rem;
`;

export const Title = styled.h2`
  text-align: center;
  ${({ theme }) => theme.typo.title1_24_B};
  color: ${({ theme }) => theme.colors.primaryColor};
  padding-bottom: 3rem;

  ${({ theme }) => theme.mediaQueries.tablet`
    display: none;
  `}
  ${({ theme }) => theme.mediaQueries.mobile`
    display: none;
  `}
`;

export const TextWrap = styled.div`
  ${({ theme }) => theme.typo.label1_16_R};
`;

export const Image = styled.img`
  width: 100%;

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 700px;
  `}
  ${({ theme }) => theme.mediaQueries.mobile`
    width: 400px;
  `}
`;
