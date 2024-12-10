import styled from 'styled-components';

export const Container = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.backGroundColor};
 
  ${({ theme }) => theme.mediaQueries.tablet`
    max-width: 100vw;
    height: 60px;
  `}

  ${({ theme }) => theme.mediaQueries.mobile`
    max-width: 100vw;
    height: 60px;
  `}
`;

export const NavWrap = styled.div`
  display: flex;
  margin: 0 auto;
  width: calc(100vw * 0.8);
  height: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkBlack};

  h1 {
    width: 80px;
    cursor: pointer;
  }

  img {
    width: 100%;
  }
`;

export const NavItemWrap = styled.ul`
  display: flex;
  gap: 15px;
  ${({ theme }) => theme.typo.desktop_body_18_M};

  li {
    cursor: pointer;
  }

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
