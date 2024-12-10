import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: calc(100vw * 0.8);

  ${({ theme }) => theme.mediaQueries.tablet`
    width: calc(100vw * 0.8);
  `}
  ${({ theme }) => theme.mediaQueries.mobile`
    width: calc(100vw * 0.8);
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => theme.typo.desktop_title_h3};
  color: ${({ theme }) => theme.colors.primaryColor};
  padding-bottom: 5rem;

  ${({ theme }) => theme.mediaQueries.tablet`
    padding-bottom: 2rem;
    ${theme.typo.tablet_title_h3};
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    padding-bottom: 2rem;
    ${theme.typo.mobile_title_h3};
  `}
`;

export const InfoWrap = styled.div`
  display: grid;
  grid-template-columns: 400px 250px;
  column-gap: 5rem;
  row-gap: 2rem;
  padding: 3rem 4rem;
  margin-bottom: 2rem;

  background-color: ${({ theme }) => theme.colors.backGroundColor};
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.mediaQueries.tablet`
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
    row-gap: 1.75rem;
    width: 90%;
    padding: 1rem 1.5rem;
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 80%;
    padding: 1rem 1.5rem;

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
  ${({ theme }) => theme.typo.desktop_body_18_M};

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    ${({ theme }) => theme.mediaQueries.mobile`
      display: none;
    `}
  }

  p {
    padding-bottom: 0.7rem;
  }

  span {
    display: block;
  }

  &:nth-child(5) {
    padding-left: calc(24px + 0.7rem);
    ${({ theme }) => theme.mediaQueries.mobile`
      padding-left: calc(24px + 0.7rem);
    `}
  }

  ${({ theme }) => theme.mediaQueries.tablet`
    ${theme.typo.tablet_body_20_M};
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_body_20_M};
  `}
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;