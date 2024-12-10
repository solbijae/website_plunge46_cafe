import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  width: 1040px;
  padding-bottom: 5rem;

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 768px;
  `}
  ${({ theme }) => theme.mediaQueries.mobile`
    width: 400px;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => theme.typo.desktop_title_h3};
  color: ${({ theme }) => theme.colors.primaryColor};
  padding-bottom: 3rem;

  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_title_h3};
  `}
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  ${({ theme }) => theme.mediaQueries.mobile`
    display: flex;
    flex-direction: column;
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

  ${({ theme }) => theme.mediaQueries.tablet`

  `}
  ${({ theme }) => theme.mediaQueries.mobile`
    max-width: 400px;
  `}
`;

export const MenuItem = styled.div`
  position: relative;
  text-align: left;
  padding: 0.5rem;
  ${({ theme }) => theme.typo.desktop_body_14_R};

  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_body_14_R};
  `}
`;

export const ItemName = styled.h3`
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.primaryColor};
  ${({ theme }) => theme.typo.desktop_body_18_M};

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

  ${({ theme }) => theme.mediaQueries.mobile`
    ${theme.typo.mobile_body_20_M};
  `}
`;

export const ItemDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray_1};
`;

export const ItemExtras = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.gray_1};
`;
