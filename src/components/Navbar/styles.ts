import styled from 'styled-components';

export const Container = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.backGroundColor2};
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
  ${({ theme }) => theme.typo.title2_20_B};

  ${({ theme }) => theme.mediaQueries.mobile`
    display: none;
  `}

  li {
    cursor: pointer;
  }
`;

export const MenuIconWrapper = styled.div`
  display: none;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.mobile`
    display: block;
  `}
`;
