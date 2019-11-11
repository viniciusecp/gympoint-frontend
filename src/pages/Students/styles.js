import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  max-width: 1200px;
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

      input {
        margin-left: 10px;
        padding: 10px 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        min-width: 240px;

        &::placeholder {
          color: #999;
        }
      }
    }
  }
`;
