import styled from 'styled-components';

export const ButtonWrap = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const CategoryButton = styled.button`
  padding: 1rem 1rem 1rem 1.5rem;
  width: 100%;
  text-align: center;
  overflow: visible;
  background-color: ${({ theme }) => theme.colors.backGroundColor2};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.typo.body1_18_B};
  border: 2px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 5px;
  box-shadow: none;
  cursor: pointer;
`;

export const PlusIcon = styled.div<{ isExpanded: boolean }>`
  padding-top: 0.5rem;
  text-align: right;

  &::before {
    content: '${(props) => (props.isExpanded ? 'SHOW LESS' : 'SHOW MORE')}';
    background-color: ${(props) =>
      props.isExpanded ? props.theme.colors.backGroundColor2 : props.theme.colors.primaryColor};  
    color: ${(props) =>
      props.isExpanded ? props.theme.colors.primaryColor : props.theme.colors.backGroundColor2};
    border: ${(props) =>
      props.isExpanded ? `1px solid ${props.theme.colors.primaryColor}` : `1px solid ${props.theme.colors.backGroundColor2}`};
    border-radius: 5px;
    padding: 0.3rem;
    ${({ theme }) => theme.typo.caption1_12_B};
  }
`;

export const Image = styled.img`
  padding-top: 1rem;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;