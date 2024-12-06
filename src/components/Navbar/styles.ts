import styled from 'styled-components';

export const Container = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.backGroundColor};
`;

export const NavWrap = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1040px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkBlack};

  ${({ theme }) => theme.mediaQueries.tablet`
    width: 768px;
  `}
  ${({ theme }) => theme.mediaQueries.laptop`
    width: 480px;
  `}
`;

export const NavItemWrap = styled.ul`
  display: flex;
  gap: 15px;
  ${({ theme }) => theme.typo.title1_24_R};

  ${({ theme }) => theme.mediaQueries.mobile`
    display: none;
  `}
`;

export const MenuIconWrapper = styled.div`
  display: none;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.mobile`
    display: block;
  `}
`;
