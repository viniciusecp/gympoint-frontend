import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 20px;
  padding: 0 15px;
  height: 45px;
  width: ${props => (props.width ? props.width : '100%')};
  background: #ee4d64;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-end'};
`;
