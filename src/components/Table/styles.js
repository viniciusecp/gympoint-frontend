import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  box-shadow: 0 0 10px #ddd;
`;

export const TableContent = styled.table`
  width: 100%;
  display: table;
  border-collapse: collapse;

  thead th {
    color: #444;
    text-align: left;
    font-size: 16px;
    line-height: 19px;
    padding: 12px 0;
  }

  tbody tr {
    & + tr {
      border-top: 1px solid #ddd;
    }

    td {
      padding: 12px 0;
      color: #666;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const ActionButton = styled.button`
  border: 0;
  background: transparent;
  margin-right: 10px;
  font-size: 15px;
  color: ${({ color }) => color || '#444'};
`;
