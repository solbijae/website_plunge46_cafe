import styled from 'styled-components';

export const ImageWrap = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 200px;
  background-color: #e0e0e0;
  border-radius: 3px;
  animation: pulse 1.5s infinite ease-in-out;

  ${({ theme }) => theme.mediaQueries.tablet`
    height: 150px;
  `}

  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
`;
