import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  height: 64px;
  padding: 0 30px;
  border: 1px solid #ddd;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 24px;

    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid #ddd;
  }

  nav {
    display: flex;
    align-items: center;

    /* button {
      border: 0;
      background: transparent;
      font-size: 15px;
      font-weight: bold;
      color: ${({ active }) => (active ? '#444' : '#999')};
      margin-right: 20px;
    } */
  }
`;

export const MenuItem = styled.button`
  border: 0;
  background: transparent;
  font-size: 15px;
  font-weight: bold;
  color: ${({ active }) => (active ? '#444' : '#999')};
  margin-right: 20px;
`;

export const UserFunctions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  strong {
    font-size: 14px;
    font-weight: bold;
    color: #666;
    text-align: end;
  }

  button {
    font-size: 14px;
    color: #de3b3b;
    border: 0;
    background: transparent;
  }
`;
