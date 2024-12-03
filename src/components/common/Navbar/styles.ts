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
`;

export const NavItemWrap = styled.ul`
  display: flex;
  gap: 15px;
  ${({ theme }) => theme.typo.title1_24_B};
`