import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5rem;
  text-align: center;
  align-items: center;
  width: 1040px;
  padding-bottom: 5rem;

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

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CategorySection = styled.div`
  width: 100%;
`;

export const ItemsContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.cardColor};
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MenuItem = styled.div`
  position: relative;
  text-align: left;
  padding: 0.5rem;
`;

export const ItemName = styled.h3`
  ${({ theme }) => theme.typo.body1_18_B};
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 0.25rem;
`;

export const ItemPrice = styled.p`
  position: absolute;
  top: 10px;
  right: 0;
  ${({ theme }) => theme.typo.body1_18_B};
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const ItemDescription = styled.p`
  ${({ theme }) => theme.typo.body2_16};
  color: ${({ theme }) => theme.colors.gray700};
`;

export const ItemExtras = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.gray_1};
`