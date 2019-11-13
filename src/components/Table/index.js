import React from 'react';
import PropTypes from 'prop-types';

import { Container, TableContent, ActionButton } from './styles';

export default function Table({ model, data }) {
  function renderActions(actions, rowId) {
    return actions.map(action => (
      <ActionButton
        key={`${action.label}-${new Date()}`}
        color={action.color}
        onClick={() => action.onClick(rowId)}
        type="button"
      >
        {action.label}
      </ActionButton>
    ));
  }

  function renderRowData(rowData) {
    return (
      <tr key={rowData.id}>
        {model.map(m => (
          <td key={`${m.key}-${rowData.id}`}>
            {m.key !== 'actions'
              ? rowData[m.key]
              : renderActions(rowData[m.key], rowData.id)}
          </td>
        ))}
      </tr>
    );
  }

  return (
    <Container>
      <TableContent>
        <thead>
          <tr>
            {model.map(m => (
              <th key={m.key}>{m.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map(d => renderRowData(d))}</tbody>
      </TableContent>
    </Container>
  );
}

Table.propTypes = {
  model: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
