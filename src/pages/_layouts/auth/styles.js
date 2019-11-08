import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 360px;
  background: #fff;
  padding: 50px 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 100px;
  }

  form {
    width: 100%;
  }
`;
