import {styled, css} from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  width: calc(100vw * 0.8);
  max-width: 1040px;
  padding-bottom: 5rem;

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
  padding-bottom: 3rem;

  ${({ theme }) => theme.mediaQueries.tablet`
    ${theme.typo.tablet_title_h3};
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_title_h3};
  `}
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  ${({ theme }) => theme.mediaQueries.tablet`
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    grid-template-columns: 1fr;
    gap: 0.5rem;
  `}
`;

export const CategorySection = styled.div`
  position: relative;
  width: 100%;
`;

export const ItemsContainer = styled.div<{ categoryIndex: number }>`
  position: absolute;
  top: 310px;
  width: calc(300% + 2rem);
  max-width: 1040px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.backGroundColor};
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  ${({ categoryIndex }) => {
    if (categoryIndex % 3 === 0) {
      return css`
        left: 0;
        transform: none;
      `;
    }
    if (categoryIndex % 3 === 1) {
      return css`
        left: 50%;
        transform: translateX(-50%);
      `;
    }
    if (categoryIndex % 3 === 2) {
      return css`
        right: 0;
        left: auto;
        transform: none;
      `;
    }
  }}

  ${({ theme, categoryIndex }) => theme.mediaQueries.tablet`
    top: 260px;
    max-width: calc(100vw * 0.8);

    ${() => {
      if (categoryIndex % 2 === 1) {
        return `
          right: 0;
          left: auto;
          transform: none;
        `;
      }
      return `
        left: 0;
        transform: none;
      `;
    }}
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    max-width: calc(100vw * 0.8);
  `}
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
  ${({ theme }) => theme.typo.desktop_body_18_M};
  color: ${({ theme }) => theme.colors.gray_1};
  font-style: italic;

  ${({ theme }) => theme.mediaQueries.tablet`
    ${theme.typo.tablet_body_20_M};
  `}
  
  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_body_20_M};
  `}
`;

export const CategoryPrice = styled.p`
  text-align: right;
  padding: 0.5rem;
  ${({ theme }) => theme.typo.desktop_body_18_M};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-style: italic;

  ${({ theme }) => theme.mediaQueries.tablet`
    ${theme.typo.tablet_body_20_M};
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_body_20_M};
  `}
`;

export const MenuItem = styled.div`
  position: relative;
  text-align: left;
  padding: 0.5rem;
  ${({ theme }) => theme.typo.desktop_body_14_R};

  ${({ theme }) => theme.mediaQueries.tablet`
    ${theme.typo.tablet_body_14_R};
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_body_14_R};
  `}
`;

export const ItemName = styled.h3`
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.primaryColor};
  ${({ theme }) => theme.typo.desktop_body_18_M};
  max-width: 75%;

  ${({ theme }) => theme.mediaQueries.tablet`
    ${theme.typo.tablet_body_20_M};
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_body_20_M};
  `}
`;

export const ItemPrice = styled.p`
  position: absolute;
  top: 10px;
  right: 0;
  color: ${({ theme }) => theme.colors.primaryColor};
  ${({ theme }) => theme.typo.desktop_body_18_M};

  ${({ theme }) => theme.mediaQueries.tablet`
    ${theme.typo.tablet_body_20_M};
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_body_20_M};
  `}
`;

export const ItemIngredients = styled.p`
  color: ${({ theme }) => theme.colors.gray_1};
  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_body_18_R};
  `}
`;

export const ItemDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray_1};
  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_body_18_R};
  `}
`;

export const ItemExtras = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.gray_1};
  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_body_18_R};
  `}
`;
