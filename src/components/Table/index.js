import React from 'react';

import { Container, TableContent, ActionButton } from './styles';

export default function Table({ model, data }) {
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
        <tbody>
          {data.map((d, i) => (
            <tr key={`${d.key}-${i}`}>
              {model.map(m => (
                <td key={`${d.key}-${m.key}`}>
                  {m.key !== 'actions'
                    ? d[m.key]
                    : d[m.key].map(action => (
                        <ActionButton
                          key={`${d.key}-${m.key}-${action.label}`}
                          color={action.color}
                          onClick={action.onClick}
                          type="button"
                        >
                          {action.label}
                        </ActionButton>
                      ))}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td>Vinicius Faustino Silva</td>
            <td>vinicius@gympoint.com</td>
            <td>23</td>
            <td>
              <ActionButton color="#4D85EE" type="button">
                editar
              </ActionButton>
              <ActionButton color="#DE3B3B" type="button">
                apagar
              </ActionButton>
            </td>
          </tr>

          {/* <tr>
            <td>Vinicius Faustino Silva</td>
            <td>vinicius@gympoint.com</td>
            <td>23</td>
            <td>
              <ActionButton color="#4D85EE" type="button">
                editar
              </ActionButton>
              <ActionButton color="#DE3B3B" type="button">
                apagar
              </ActionButton>
            </td>
          </tr> */}
        </tbody>
      </TableContent>
    </Container>
  );
}
