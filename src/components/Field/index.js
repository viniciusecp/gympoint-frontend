import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Field({ label, id, type, value, setValue, ...rest }) {
  function handleInputChange(e) {
    setValue(e.target.value);
  }

  return (
    <Container htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleInputChange}
        {...rest}
      />
    </Container>
  );
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
