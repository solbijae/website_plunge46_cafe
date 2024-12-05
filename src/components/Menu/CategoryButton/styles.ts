import styled from 'styled-components';

export const ButtonWrap = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const CategoryButton = styled.button`
  padding: 1rem 1rem 1rem 1.5rem;
  width: 100%;
  text-align: left;
  overflow: visible;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.typo.body1_18_B};
  border: none;
  border-radius: 5px;
  box-shadow: none;
  cursor: pointer;
`;

export const PlusIcon = styled.div<{ isExpanded: boolean }>`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  
  &::before {
    content: "${props => props.isExpanded ? '-' : '+'}";
    position: absolute;
    top: 43%;
    left: 47%;
    transform: translate(-43%, -47%);
    color: ${({ theme }) => theme.colors.primaryColor};
    ${({ theme }) => theme.typo.body1_18_B};
  }
`;