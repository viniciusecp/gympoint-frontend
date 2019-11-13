import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  max-width: 900px;
  width: 100%;

  header {
    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 24px;
      font-weight: bold;
      color: #444;
    }

    div {
      display: flex;

      button:last-child {
        margin-left: 10px;
      }
    }
  }
`;

export const Form = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 10px 30px 30px;
  box-shadow: 0 0 10px #ddd;

  div {
    display: flex;

    label {
      margin-right: 5px;
    }
  }
`;
