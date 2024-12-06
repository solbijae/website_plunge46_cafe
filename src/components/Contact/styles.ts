import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5rem;
  align-items: center;
  width: 1040px;
  padding-bottom: 6rem;

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 768px;
  `}
  ${({ theme }) => theme.mediaQueries.mobile`
    width: 480px;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => theme.typo.title_h3};
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: 5rem;
`;

export const InfoWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10rem;
  row-gap: 2rem;
  padding: 3rem 4rem;
  margin-bottom: 2rem;

  background-color: ${({ theme }) => theme.colors.cardColor};
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const InfoItems = styled.div`
  display: flex;
  gap: 0.7rem;
  ${({ theme }) => theme.typo.body1_18_B};

  p {
    padding-bottom: 0.7rem;
  }

  span {
    display: block;
  }

  &:nth-child(4) {
    padding-left: calc(24px + 0.7rem);
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;


export const MapWrap = styled.div`
  width: 77%;
  height: 300px;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`