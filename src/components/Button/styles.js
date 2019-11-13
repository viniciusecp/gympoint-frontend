import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.button.attrs(props => ({
  disabled: props.loading,
}))`
  /* margin-top: 20px; */
  padding: 0 15px;
  height: ${({ height }) => height || '36px'};
  width: ${({ width }) => width || '100%'};
  background: ${({ background }) => background || '#ee4d64'};
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-end'};

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
