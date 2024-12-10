import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  width: calc(100vw * 0.8);
  max-width: 1040px;
  height: auto;

  ${({ theme }) => theme.mediaQueries.tablet`
    width: calc(100vw * 0.8);
  `}
  
  ${({ theme }) => theme.mediaQueries.mobile`
    width: calc(100vw * 0.8);
  `}
`;

export const TextContainer = styled.div`
  padding-bottom: 2rem;
`;

export const Title = styled.h2`
  text-align: center;
  ${({ theme }) => theme.typo.desktop_title_h2};
  color: ${({ theme }) => theme.colors.primaryColor};
  padding-bottom: 3rem;

  ${({ theme }) => theme.mediaQueries.tablet`
    ${theme.typo.tablet_title_h2};
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_title_h2};
  `}
`;

export const TextWrap = styled.div`
  ${({ theme }) => theme.typo.desktop_body_18_R};

  ${({ theme }) => theme.mediaQueries.tablet`
    ${theme.typo.tablet_body_18_R};
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_body_18_R};
  `}
`;

export const Image = styled.img`
  padding-bottom: 5rem;
  width: 100%;
`;
