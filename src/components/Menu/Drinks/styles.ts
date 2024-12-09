import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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

export const MenuContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const CategorySection = styled.div`
  position: relative;
  width: 100%;
`;

export const ItemsContainer = styled.div<{ categoryIndex: number }>`
  position: absolute;
  top: 310px;
  width: 100vw;
  max-width: 1040px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.backGroundColor};
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  
  ${({ categoryIndex }) => {
    switch (categoryIndex % 3) {
      case 0:
        return `
          left: 0;
        `;
      case 1:
        return `
          left: 50%;
          transform: translateX(-50%);
        `;
      case 2:
        return `
          right: 0;
        `;
      default:
        return '';
    }
  }}
`;

export const CategoryContainer = styled.div<{
  hasCategoryName: boolean;
  hasCategoryPrice: boolean;
}>`
  display: flex;
  justify-content: ${({ hasCategoryName, hasCategoryPrice }) =>
    hasCategoryName && hasCategoryPrice
      ? 'space-between'
      : hasCategoryPrice
        ? 'flex-end'
        : 'flex-start'};
  align-items: center;
`;

export const CategoryName = styled.p`
  text-align: left;
  padding: 0.5rem;
  ${({ theme }) => theme.typo.body1_18_B};
  color: ${({ theme }) => theme.colors.gray_1};
  font-style: italic;
`;

export const CategoryPrice = styled.p`
  text-align: right;
  padding: 0.5rem;
  ${({ theme }) => theme.typo.body1_18_B};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-style: italic;
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

export const ItemIngredients = styled.p``;

export const ItemDescription = styled.p`
  ${({ theme }) => theme.typo.body2_16_R};
  color: ${({ theme }) => theme.colors.gray700};
`;

export const ItemExtras = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.gray_1};
`;
