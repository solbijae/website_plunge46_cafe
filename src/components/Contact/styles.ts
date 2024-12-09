import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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
  padding-bottom: 5rem;
`;

export const InfoWrap = styled.div`
  display: grid;
  grid-template-columns: 400px 250px;
  column-gap: 5rem;
  row-gap: 2rem;
  padding: 3rem 4rem;
  margin-bottom: 2rem;

  background-color: ${({ theme }) => theme.colors.backGroundColor2};
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.mediaQueries.mobile`
    display: flex;
    flex-direction: column;
    .item-0 {
      order: 0;
    }

    .item-1 {
      order: 2;
    }

    .item-2 {
      order: 1;
    }

    .item-3 {
      order: 3;
    }

    .item-4 {
      order: 5;
    }

    .item-5 {
      order: 4;
    }

  `}
`;

export const InfoItems = styled.div`
  display: flex;
  gap: 0.7rem;
  ${({ theme }) => theme.typo.body1_18_B};

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  p {
    padding-bottom: 0.7rem;
  }

  span {
    display: block;
  }

  &:nth-child(5) {
    padding-left: calc(24px + 0.7rem);
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;