import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1040px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backGroundColor};
  box-shadow: ${({ theme }) => theme.shadows.bottomTab};
  z-index: 5;

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 80%;
  `}
  ${({ theme }) => theme.mediaQueries.laptop`
    width: 90%;
  `}
`;

export const NavItemWrap = styled.ul`
  display: flex;
  gap: 15px;
  ${({ theme }) => theme.typo.title1_24_B};

  ${({ theme }) => theme.mediaQueries.mobile`
    display: none;
  `}
`;

export const MenuIconWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.mobile`
    display: block;
  `}
`;
